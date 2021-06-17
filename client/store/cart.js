import axios from 'axios';

// ACTION TYPES
const SET_CART = 'SET_CART';
const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';

// ACTION CREATORS
const setCart = (cart) => {
  return {
    type: SET_CART,
    cart,
  };
};

const incrementQuantity = (productId) => {
  return {
    type: INCREMENT_QUANTITY,
    productId,
  };
};

const decrementQuantity = (productId) => {
  return {
    type: DECREMENT_QUANTITY,
    productId,
  };
};

// THUNK CREATORS
export const fetchCart = (userId) => {
  // THUNK
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/orders/cart/${userId}`);
      dispatch(setCart(data));
    } catch (error) {
      console.log('Error while trying to fetch the cart data!', error);
    }
  };
};

// INITIAL STATE
const initialState = {
  items: [], //array of objects of each product from db
  addedItems: [], //empty - the user changes this state, adding items to cart

  cart: [],
  total: 0,
};

// REDUCER
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    // case INCREMENT_QUANTITY:
    //   return ;
    // case DECREMENT_QUANTITY:
    //   return
    default:
      return state;
  }
};

export default cartReducer;
