import { ADD_TO_CART, REMOVE_FROM_CART, CREATE_ORDER } from '../actions/actions';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]'),
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { ...state, cartItems: action.payload };
    case ADD_TO_CART:
      return { cartItems: action.payload };
    case REMOVE_FROM_CART:
      return { cartItems: state.cartItems.filter(item => item !== action.payload) };
    default:
      return state;
  }
};

//maybe use this for localstorage
//// { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") },
