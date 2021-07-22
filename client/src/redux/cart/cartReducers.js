import * as types from "./cartActionTypes";

const initialCartState = {
  foods: [],
  count: 0,
  totalAmount: 0,
  discount: null,
  error: null,
  message: null,
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
    case types.RESTORE_CART:
      return {
        ...action.payload,
      };

    case types.UPDATE_CART_COUPON:
      return {
        ...state,
        ...updateCoupon(state, action.payload),
      };

    case types.CLEAR_CART:
      localStorage.removeItem("foodoCart");
      return initialCartState;

    case types.COUPON_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case types.CLEAR_ERROR_AND_MESSAGE:
      return {
        ...state,
        error: null,
        message: null,
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
    newCartState.totalAmount = calculateTotal(
      newCartState.foods,
      newCartState.discount
    );
    newCartState.count = countItemsInCart(newCartState.foods);
    localStorage.setItem("foodoCart", JSON.stringify(newCartState));
    return newCartState;
  } else {
    food.qty = qty;
    let updatedCart = { ...cart };
    updatedCart.foods = [...updatedCart.foods, food];

    updatedCart.totalAmount = calculateTotal(updatedCart.foods);
    updatedCart.count = countItemsInCart(updatedCart.foods);

    localStorage.setItem("foodoCart", JSON.stringify(updatedCart));
    return updatedCart;
  }
}

function removeItemFromCart(cart, payload) {
  const newCartState = { ...cart };
  newCartState.foods = newCartState.foods.filter((obj) => obj._id !== payload);

  newCartState.totalAmount = calculateTotal(
    newCartState.foods,
    newCartState.discount
  );
  newCartState.count = countItemsInCart(newCartState.foods);
  localStorage.setItem("foodoCart", JSON.stringify(newCartState));

  return newCartState;
}

function updateCoupon(cart, percent_off) {
  const newCartState = { ...cart };
  newCartState.discount = percent_off;
  newCartState.totalAmount = calculateTotal(newCartState.foods, percent_off);
  newCartState.count = countItemsInCart(newCartState.foods);
  newCartState.message = `Coupon has been applied! You got ${percent_off}% off`;
  // local storage cart was declared so the toast will not keep poping off
  const local_storage_cart = { ...newCartState, message: null, discount: null };
  localStorage.setItem("foodoCart", JSON.stringify(local_storage_cart));
  return newCartState;
}

function calculateTotal(cart, discount) {
  let total = 0;
  total = cart.reduce((sum, i) => {
    return sum + i.price * i.qty;
  }, 0);
  if (discount) {
    total = total - (discount / 100) * total;
    console.log(total);
  }
  return +total.toFixed(2);
}

function countItemsInCart(cart) {
  return cart.reduce((sum, i) => {
    return sum + i.qty;
  }, 0);
}
