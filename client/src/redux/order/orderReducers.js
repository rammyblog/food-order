import * as types from "./orderActionTypes";

const initialOrderState = {
  loading: false,
  orderResponse: "",
  error: false,
  errResponse: "",
};

export default function orderReducer(state = initialOrderState, action) {
  switch (action.type) {
    case types.PAY_FOR_ORDER:
      return {
        ...state,
        loading: true,
        error: false,
        errResponse: "",
        orderResponse: action.payload,
      };
    case types.ORDER_FAILED:
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
