import * as types from "./cartActionTypes";

const initialCartState = {
  cart: [],
  //   total: 0,
};

export default function cartReducer(state = initialCartState, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        ...state,

        cart: addToExistingObjInCart(state.cart, action.payload),
        // total: calculateTotal(state.cart),
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
    newCartState.totalAmount = calculateTotal(newCartState);
    return newCartState;
  } else {
    food.qty = qty;
    let updatedCart = [...cart, food];
    updatedCart.totalAmount = calculateTotal(updatedCart);
    return updatedCart;
  }
}

function calculateTotal(cart) {
  return cart.reduce((sum, i) => {
    return sum + i.price * i.qty;
  }, 0);
}
