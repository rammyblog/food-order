import React, { useEffect } from "react";
import FoodGrid from "./FoodGrid";
import { useDispatch, useSelector } from "react-redux";
import { getFoodFromDb } from "../redux/food/foodActionCreators";
import SpinnerReusable from "./common/Spinner";
import { Center } from "@chakra-ui/react";

const Home = () => {
  const dispatch = useDispatch();
  const { loading: foodStateLoading, foods } = useSelector(
    (state) => state.foods
  );
  useEffect(() => {
    if (!foods) {
      dispatch(getFoodFromDb());
    }
  }, [dispatch, foods]);

  if (foodStateLoading) {
    return (
      <Center>
        <SpinnerReusable size="xl" />
      </Center>
    );
  }
  return <div>{foods && <FoodGrid foods={foods} />}</div>;
};

export default Home;
