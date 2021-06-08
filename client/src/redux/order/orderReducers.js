import * as types from "./orderActionTypes";

const initialOrderState = {
  loading: false,
  orderResponse: null,
  error: false,
  errResponse: "",
  orders: null,
  singleOrder: null,  
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
    case types.GET_ORDERS:
      return {
        ...state,
        loading: true,
        error: false,
        errResponse: "",
        orders: action.payload,
      };
    case types.GET_SINGLE_ORDER:
      return {
        ...state,
        loading: false,
        error: false,
        errResponse: "",
        singleOrder: action.payload,
      };
    case types.ORDER_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        orderResponse: null,
        errResponse: action.payload,
      };
    case types.ORDER_RESPONSE_CLEAR:
      return {
        ...state,
        orderResponse: null,
      };
    default:
      return state;
  }
}
