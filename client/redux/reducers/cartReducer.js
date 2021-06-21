import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actions';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]'),
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cartItems: action.payload };
    case REMOVE_FROM_CART:
      return { cartItems: action.payload };
    default:
      return state;
  }
};

//maybe use this for localstorage
//// { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") },
