import axios from 'axios';

const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT';
const initialState = [];

export const setSingleProduct = (product) => {
  return {
    type: SET_SINGLE_PRODUCT,
    product,
  };
};

export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(setSingleProduct(data));
  };
};

export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return {...state, product: action.product}
    default:
      return state;
  }
}
