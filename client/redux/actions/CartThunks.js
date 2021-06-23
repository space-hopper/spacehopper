import { ADD_TO_CART, REMOVE_FROM_CART, CREATE_ORDER } from './actions';
import axios from 'axios';

export const createOrder = (id) => ({
  type: CREATE_ORDER,
  id,
});

export const userCart = (id) => {
  //get cart from the back end
  return async (dispatch) => {
    try {
      const { data: products } = await axios.get(`/api/orders/cart/${id}`);
      dispatch(createOrder(products));
    } catch (error) {
      console.log('could not fetch order');
    }
  };
};

export const addToCart = (product, count) => {
  return async (dispatch, getState) => {
    //Grabbing the current items in the cart so that we can tell if that product already exists in the cart
    // const cartItems = getState().cart.cartItems.slice();
    // let alreadyExists = false;
    // // cartItems.forEach((item) => {
    // //   if (item.id === product.id) {
    // //     alreadyExists = true;
    // //     item.count += count;
    // //   }
    // // });
    // if (!alreadyExists) {
    //   cartItems.push({ ...product, count: count });
    // }
    // If the user is logged in, save this cart in our backend by making an axios call
    // If the user is not logged in, save this cart in their local storage

    // check local storage and add items to the cart once they log in

    const user = getState().auth;
    let newItems;
    if (user.id) {
      const res = await axios.get(`/api/orders/cart/${user.id}`);
      const productId = product.id;
      const orderId = res.data[0].id;
      const orderInfo = (
        await axios.put(
          `/api/orders/${orderId}/${productId}`,
          {
            quantity: count,
          },
        )
      ).data;
      newItems = orderInfo.map((val) => {
        return {
          id: val.id,
          name: val.name,
          imageURL: val.imageURL,
          count: val.orderDetails.quantity,
          price: val.price,
        };
      });
    } else {
      // localStorage.setItem('cartItems', JSON.stringify(cartItems));
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
