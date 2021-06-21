import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

export const addToCart = (product, count) => async (dispatch, getState) => {
  //Grabbing the current items in the cart so that we can tell if that product already exists in the cart
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((item) => {
    if (item.id === product.id) {
      alreadyExists = true;
      item.count += count;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: count });
  }
  // If the user is logged in, save this cart in our backend by making an axios call
  // If the user is not logged in, save this cart in their local storage
  const user = getState().auth;
  if (user.id) {
    const res = await axios.get(`/api/orders/cart/${user.id}`);
    dispatch({
      type: ADD_TO_CART,
      payload: cartItems,
    });
  } else {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    dispatch({
      type: ADD_TO_CART,
      payload: cartItems,
    });
  }
};

// export const removeFromCart = (product) => (dispatch, getState) => {
//   const cartItems = getState()
//     .cart.cartItems.slice()
//     .filter((item) => item._id !== product._id);
//   dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));
// };
