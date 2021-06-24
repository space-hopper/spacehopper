import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import auth from '../store/auth';
import { Login } from './AuthForm';
import {
  addToCart,
  removeFromCart,
  userCart,
  checkoutThunk
} from '../redux/actions/CartThunks';

const ViewCart = (props) => {
  const [count, setCount] = useState(1);
  const [item, setItem] = useState([]);
  console.log('ViewCart props', props);
  const cartItems = props.cartItem.cartItems;

  const increaseQuantity = (index) => {
    const currentItems = [...cartItems];
    // setCount(count + 1);
    // console.log('count', count);
    // props.addToCart(currentItems[index], count);
    console.log('currentItems[index]', currentItems[index]);
    props.addToCart(
      currentItems[index],
      currentItems[index].orderDetails.quantity + 1,
    );
  };

  const decreaseQuantity = (index) => {
    const currentItems = [...cartItems];
    // if (currentItems[index].count > 0) {
    //   setCount(count - 1);
    //   props.removeFromCart(currentItems[index], count);
    // }
    console.log('currentItems[index]', currentItems[index]);
    props.addToCart(
      currentItems[index],
      currentItems[index].orderDetails.quantity - 1,
    );
  };
  useEffect(() => {
    props.userCart(props.auth.id);
  }, [props.auth]);
  const handleItemDelete = (index) => {
    props.addToCart(cartItems[index], 0);
  };

  console.log("props.auth.id", props.auth.id)

  return (
    <div className="container">
      <button className="buttonDesign"
      onClick={() => props.checkout(props.auth.id, cartItems[0].orderDetails.orderId)}>
        Proceed to Checkout</button>
      <div className="cart-total">
        Total:{' $'}
        {props.auth.id
          ? cartItems
              .reduce((a, c) => {
                return a + c.orderDetails.totalPrice;
              }, 0)
              .toFixed(2)
          : cartItems
              .reduce((a, c) => {
                return a + c.price * c.count;
              }, 0)
              .toFixed(2)}
      </div>
      <div className="cart-container">
      {cartItems.map((item, i) => {
        return (
          <div key={item.id}>
            <div className="products-page">
              <img
                className="productImage-card"
                src={item.imageURL}
                alt={item.name}
                onClick={() => handleItemDelete(i)}
              />
              <div className="itemName">{item.name}</div>
              <div className="productPrice">$ {item.price.toFixed(2)}</div>
              <div className="buttonSpacing"></div>
              <button
                className="buttonDesignQ"
                onClick={() => increaseQuantity(i)}
              >
                +
              </button>
              <input
                className="quantityInput"
                onChange={(e) => setCount(e.target.value)}
                value={item.orderDetails.quantity}
              />
              <button
                className="buttonDesignQ"
                onClick={() => decreaseQuantity(i)}
              >
                -
              </button>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItem: state.cart,
    auth: state.auth,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product, count) => dispatch(addToCart(product, count)),
    removeFromCart: (product, count) =>
      dispatch(removeFromCart(product, count)),
    userCart: (userId) => dispatch(userCart(userId)),
    checkout: (userId, orderId) => dispatch(checkoutThunk(userId, orderId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewCart);
