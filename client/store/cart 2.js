import axios from 'axios';

const initialState = {
  items: [], //array of objects of each product from db
  addedItems: [], //empty - the user changes this state, adding items to cart
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  return state;
};

export default cartReducer;
