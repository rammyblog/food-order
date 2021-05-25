import axios from "axios";
import * as types from "./authActionTypes";

export const authLogin = (userData) => {
  return function (dispatch) {
    dispatch({ type: types.AUTH_START });
  };
};
