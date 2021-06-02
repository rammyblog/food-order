import * as types from "./cartActionTypes";

const initialCartState = {
  foods: [],
  count: 0,
  totalAmount: 0,
};

export default function cartReducer(state = initialCartState, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        ...addToExistingObjInCart(state, action.payload),
      };
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        ...removeItemFromCart(state, action.payload),
      };

    default:
      return state;
  }
}

function addToExistingObjInCart(cart, payload) {
  const newCartState = { ...cart };
  const { food, qty } = payload;
  let existingFood = newCartState.foods.find((obj) => obj._id === food._id);

  if (existingFood) {
    existingFood.qty = qty;
    newCartState.totalAmount = calculateTotal(newCartState.foods);
    newCartState.count = countItemsInCart(newCartState.foods);

    return newCartState;
  } else {
    food.qty = qty;
    let updatedCart = { ...cart };
    updatedCart.foods = [...updatedCart.foods, food];

    updatedCart.totalAmount = calculateTotal(updatedCart.foods);
    updatedCart.count = countItemsInCart(updatedCart.foods);

    return updatedCart;
  }
}

function removeItemFromCart(cart, payload) {
  const newCartState = { ...cart };
  newCartState.foods = newCartState.foods.filter((obj) => obj._id !== payload);

  newCartState.totalAmount = calculateTotal(newCartState.foods);
  newCartState.count = countItemsInCart(newCartState.foods);
  return newCartState;
}

function calculateTotal(cart) {
  return cart.reduce((sum, i) => {
    return sum + i.price * i.qty;
  }, 0);
}

function countItemsInCart(cart) {
  return cart.reduce((sum, i) => {
    return sum + i.qty;
  }, 0);
}
