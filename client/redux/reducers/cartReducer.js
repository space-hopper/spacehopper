/* eslint-disable no-case-declarations */
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CREATE_ORDER,
} from '../actions/actions';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]'),
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { ...state, cartItems: action.payload };
    case ADD_TO_CART:
      if (action.isLoggedIn) {
        const newCartItems = [...action.newItems];
        return { ...state, cartItems: newCartItems };
      } else {
        // checking if the product already exists in the cart
        if (
          state.cartItems.reduce((accumulator, value, i) => {
            if (value.id == action.newItems[i].id) {
              accumulator = true;
            }
            return accumulator;
          }, false)
        ) {
          const newCartItems = state.cartItems.map((product, i) => {
            if (product.id == action.newItems[i].id) {
              product.count++;
            }
            return product;
          });
          return { ...state, cartItems: newCartItems };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, ...action.newItems],
          };
        }
      }

    case REMOVE_FROM_CART:
      return {
        cartItems: state.cartItems.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

//maybe use this for localstorage
//// { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") },
