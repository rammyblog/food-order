import React, { useEffect } from "react";
import FoodGrid from "./FoodGrid";
import { useDispatch, useSelector } from "react-redux";
import { getFoodFromDb } from "../redux/food/foodActionCreators";

const Home = () => {
  const dispatch = useDispatch();
  const foodState = useSelector((state) => state.food);
  useEffect(() => {
    if (!foodState.foods) {
      dispatch(getFoodFromDb());
    }
  }, [dispatch, foodState.foods]);
  return (
    <div>
      <FoodGrid foods={foodState.foods} />
    </div>
  );
};

export default Home;
