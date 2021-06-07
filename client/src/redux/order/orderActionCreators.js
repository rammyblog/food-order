import * as types from "./orderActionTypes";
import axios from "../../api/apiUtils";

export const createOrderAction = (cart, reference) => {
  return async function (dispatch) {
    try {
      const res = await axios.post("api/orders", { cart, reference });
      dispatch({ type: types.PAY_FOR_ORDER, payload: res.data });
    } catch (error) {
      const error_msg =
        error.response && error.response.data.error_msg
          ? error.response.data.error_msg
          : error.message;
      dispatch({ type: types.ORDER_FAILED, payload: error_msg });
    }
  };
};
