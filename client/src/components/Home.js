import React, { useEffect } from "react";
import FoodGrid from "./FoodGrid";
import { useDispatch, useSelector } from "react-redux";
import { getFoodFromDb } from "../redux/food/foodActionCreators";
import SpinnerReusable from "./common/Spinner";
import { Center, Text } from "@chakra-ui/react";

const Home = () => {
  const dispatch = useDispatch();
  const {
    loading: foodStateLoading,
    foods,
    error,
  } = useSelector((state) => state.foods);
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

  if (error) {
    return (
      <Center>
        <Text fontWeight="bold">An error occurred!!</Text>
      </Center>
    );
  }
  return <div>{foods && <FoodGrid foods={foods} />}</div>;
};

export default Home;
