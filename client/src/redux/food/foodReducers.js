import * as types from "./foodActionTypes";

const initialFoodState = {
  loading: false,
  foods: "",
  error: false,
  errResponse: "",
};

export default function foodReducer(state = initialFoodState, action) {
  switch (action.type) {
    case types.FOOD_START:
      return {
        ...state,
        loading: true,
        error: false,
        errResponse: "",
      };

    case types.FOOD_SUCCESS:
      return {
        ...state,
        loading: false,
        foods: action.payload,
      };

    case types.FOOD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errResponse: action.payload,
      };
    case types.FOOD_RESET:
      return {
        ...state,
        loading: false,
        error: false,
        errResponse: "",
      };

    default:
      return state;
  }
}
