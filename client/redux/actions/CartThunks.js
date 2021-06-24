import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CREATE_ORDER,
  CHECKOUT,
} from './actions';
import axios from 'axios';

export const createOrder = (products) => ({
  type: CREATE_ORDER,
  products,
});

export const checkout = (order) => {
  return {
    type: CHECKOUT,
    order,
  };
};

export const checkoutThunk = (userId, orderId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(
        `/api/orders/checkout/${userId}/${orderId}`,
      );
      dispatch(checkout(data));
    } catch (error) {
      console.log('error during checkout :(', error);
    }
  };
};

export const userCart = (id) => {
  //get cart from the back end
  return async (dispatch) => {
    const token = window.localStorage.getItem('token');
    try {
      const products = (
        await axios.get(`/api/orders/cart/${id}`, {
          headers: {
            authorization: token,
          },
        })
      ).data[0].products;
      dispatch(createOrder(products));
    } catch (error) {
      console.log('could not fetch order');
    }
  };
};

export const addToCart = (product, count) => {
  return async (dispatch, getState) => {
    const user = getState().auth;
    let newItems;
    const token = window.localStorage.getItem('token');
    if (user.id) {
      const res = await axios.get(`/api/orders/cart/${user.id}`, {
        headers: {
          authorization: token,
        },
      });
      const productId = product.id;
      console.log('productId', productId);
      const orderId = res.data[0].id;
      newItems = (
        await axios.put(
          `/api/orders/${orderId}/${productId}`,
          { quantity: count },
          { headers: { authorization: token } },
        )
      ).data;
    } else {
      newItems = [{ ...product, count }];
    }
    dispatch({
      type: ADD_TO_CART,
      newItems,
      loggedIn: Boolean(user.id),
    });
  };
};

export const removeFromCart = (product, count) => {
  return async (dispatch, getState) => {
    //Grabbing the current items in the cart so that we can tell if that product already exists in the cart
    const cartItems = getState().cart.cartItems.slice();
    let alreadyExists = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        alreadyExists = true;
        item.count -= 1;
      }
    });
    if (!alreadyExists) {
      cartItems.push({ ...product, count: count });
    }
    // If the user is logged in, save this cart in our backend by making an axios call
    // If the user is not logged in, save this cart in their local storage

    // check local storage and add items to the cart once they log in

    const user = getState().auth;
    if (user.id) {
      const res = await axios.get(`/api/orders/cart/${user.id}`);

      dispatch({
        type: REMOVE_FROM_CART,
        payload: cartItems,
      });
    } else {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      dispatch({
        type: REMOVE_FROM_CART,
        payload: cartItems,
      });
    }
  };
};

// export const removeFromCart = (product) => (dispatch, getState) => {
//   const cartItems = getState()
//     .cart.cartItems.slice()
//     .filter((item) => item._id !== product._id);
//   dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));
// };
