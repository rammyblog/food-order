import * as types from "./cartActionTypes";
import axios from "axios";

export const updateCoupon = (coupon) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/api/coupon/${coupon}`);
      dispatch({
        type: types.UPDATE_CART_COUPON,
        coupon: res.data.percent_off,
      });
    } catch (error) {
      dispatch({ type: types.COUPON_ERROR, payload: "Coupon is invalid" });
    }
  };
};

export const addToCart = (foodDetails, qty) => {
  return function (dispatch) {
    const payload = { food: foodDetails, qty: Number(qty) };
    dispatch({
      type: types.ADD_TO_CART,
      payload,
    });
  };
};

export const removeFromCart = (id) => {
  return function (dispatch) {
    dispatch({
      type: types.REMOVE_FROM_CART,
      payload: id,
    });
  };
};

export const clearCartAction = () => {
  return function (dispatch) {
    dispatch({
      type: types.CLEAR_CART,
    });
  };
};

export const restoreFromLocalStorageAction = () => {
  return function (dispatch) {
    dispatch({
      type: types.RESTORE_CART,
      payload: JSON.parse(localStorage.getItem("foodoCart")),
    });
  };
};

export const restoreFromPrevOrderAction = (payload) => {
  return function (dispatch) {
    localStorage.setItem("foodoCart", JSON.stringify(payload));

    dispatch({
      type: types.RESTORE_CART,
      payload,
    });
  };
};
