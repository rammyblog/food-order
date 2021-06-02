import * as types from "./cartActionTypes";

const initialCartState = {
  cart: [],
};

export default function cartReducer(state = initialCartState, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        ...state,
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
    existingFood.qty = qty;
    newCartState.totalAmount = calculateTotal(newCartState);
    newCartState.count = countItemsInCart(newCartState);

    return newCartState;
  } else {
    food.qty = qty;
    let updatedCart = [...cart, food];
    updatedCart.totalAmount = calculateTotal(updatedCart);
    updatedCart.count = countItemsInCart(updatedCart);

    return updatedCart;
  }
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
