import axios from "../../api/apiUtils";
import * as types from "./userActionTypes";

export const getUserAction = () => {
  return async function (dispatch) {
    dispatch({ type: types.USER_START });
    try {
      const res = await axios.get(`api/users/`);

      dispatch({
        type: types.GET_USER,
        payload: res.data.user,
      });
    } catch (error) {
      const error_msg =
        error.response && error.response.data.error_msg
          ? error.response.data.error_msg
          : error.message;
      dispatch({ type: types.USER_FAILURE, payload: error_msg });
    }
  };
};
