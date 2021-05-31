import React, { useEffect } from "react";
import FoodGrid from "./FoodGrid";
import { useDispatch, useSelector } from "react-redux";
import { getFoodFromDb } from "../redux/food/foodActionCreators";
import SpinnerReusable from "./common/Spinner";
import { Center } from "@chakra-ui/react";

const Home = () => {
  const dispatch = useDispatch();
  const foodState = useSelector((state) => state.foods);
  useEffect(() => {
    if (foodState && !foodState.foods) {
      dispatch(getFoodFromDb());
    }
  }, [dispatch, foodState]);

  if (foodState && foodState.loading) {
    return (
      <Center>
        <SpinnerReusable size="xl" />
      </Center>
    );
  }
  return <div>{foodState && <FoodGrid foods={foodState.foods} />}</div>;
};

export default Home;
