import * as types from "./foodActionTypes";
import axios from "axios";

export const getFoodFromDb = () => {
  return async function (dispatch) {
    dispatch({ type: types.FOOD_START });
    try {
      const res = await axios.get("api/foods");
      dispatch({ type: types.FOOD_SUCCESS, payload: res.data });
    } catch (error) {
      const error_msg =
        error.response && error.response.data.error_msg
          ? error.response.data.error_msg
          : error.message;
      dispatch({ type: types.FOOD_FAILURE, payload: error_msg });
    }
  };
};
