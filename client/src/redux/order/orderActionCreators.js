import * as types from "./orderActionTypes";
import axios from "../../api/apiUtils";
import { store } from "../../index";

export const createOrderAction = (cart, reference) => {
  return async function (dispatch) {
    dispatch({ type: types.ORDER_START });

    try {
      const res = await axios.post("api/orders", { cart, reference });
      dispatch({ type: types.PAY_FOR_ORDER, payload: res.data });
      dispatch({ type: "CLEAR_CART" });
    } catch (error) {
      const error_msg =
        error.response && error.response.data.error_msg
          ? error.response.data.error_msg
          : error.message;
      dispatch({ type: types.ORDER_FAILED, payload: error_msg });
    }
  };
};

export const getOrdersAction = () => {
  return async function (dispatch) {
    dispatch({ type: types.ORDER_START });
    try {
      const res = await axios.get("api/orders");
      dispatch({ type: types.GET_ORDERS, payload: res.data });
    } catch (error) {
      const error_msg =
        error.response && error.response.data.error_msg
          ? error.response.data.error_msg
          : error.message;
      dispatch({ type: types.ORDER_FAILED, payload: error_msg });
    }
  };
};

export const getSingleOrderAction = (id) => {
  return async function (dispatch) {
    dispatch({ type: types.ORDER_START });

    try {
      const { order } = store.getState();
      console.log(order);
      if (!order.orders) {
        const res = await axios.get(`/api/orders/${id}`);
        dispatch({ type: types.GET_SINGLE_ORDER, payload: res.data });
      } else {
        const singleOrder = order.orders.filter((obj) => obj._id === id);
        dispatch({ type: types.GET_SINGLE_ORDER, payload: singleOrder });
      }
    } catch (error) {
      const error_msg =
        error.response && error.response.data.error_msg
          ? error.response.data.error_msg
          : error.message;
      dispatch({ type: types.ORDER_FAILED, payload: error_msg });
    }
  };
};
