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
        console.log('newItems', action.newItems);
        const newCartItems = [...action.newItems];
        console.log('newCartItems', newCartItems);
        return { ...state, cartItems: newCartItems };
      } else {
        if (
          state.cartItems.reduce((accumulator, value) => {
            if (value.id == action.newItems[0].id) {
              accumulator = true;
            }
            return accumulator;
          }, false)
        ) {
          const newCartItems = state.cartItems.map((product) => {
            if (product.id == action.newItems[0].id) {
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
