import * as types from "./cartActionTypes";

const initialCartState = {
  loading: false,
  cart: [],
  error: false,
  errResponse: "",
};

export default function cartReducer(state = initialCartState, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        loading: false,
        error: false,
        errResponse: "",
        cart: addToExistingObjInCart(state.cart, action.payload),
      };

    default:
      return state;
  }
}

function addToExistingObjInCart(cart, payload) {
  const newCartState = [...cart];
  const { food, qty } = payload;
  let existingFood = newCartState.find((obj) => obj._id === food._id);

  if (existingFood) {
    existingFood.qty += qty;
    return newCartState;
  } else {
    food.qty = qty;
    return [...cart, food];
  }
}
