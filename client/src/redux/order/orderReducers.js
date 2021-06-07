import * as types from "./foodActionTypes";

const initialOrderState = {
  loading: false,
  orderResponse: "",
  error: false,
  errResponse: "",
};

export default function foodReducer(state = initialOrderState, action) {
  switch (action.type) {
    case types.PAY_FOR_ORDER:
      return {
        ...state,
        loading: true,
        error: false,
        errResponse: "",
        orderResponse: action.payload,
      };

    default:
      return state;
  }
}
