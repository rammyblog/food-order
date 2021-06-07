import * as types from "./userActionTypes";

const initialUserState = {
  loading: true,
  error: false,
  errResponse: "",
  user: null,
};

export default function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case types.USER_START:
      return {
        ...state,
        loading: true,
        error: false,
        errResponse: "",
      };
    case types.GET_USER:
      return {
        ...state,
        loading: false,
        error: false,
        errResponse: "",
        user: action.payload,
      };
    case types.USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errResponse: action.payload,
      };
    default:
      return state;
  }
}
