import React, { useState } from 'react';
import { connect } from 'react-redux';
import auth from '../store/auth';
import { Login } from './AuthForm';
import { addToCart, removeFromCart } from '../redux/actions/CartThunks';

const ViewCart = (props) => {
  const [count, setCount] = useState(1);
  const [item, setItem] = useState([]);
  console.log('ViewCart props', props);
  const cartItems = props.cartItem.cartItems;

  const increaseQuantity = (index) => {
    const currentItems = [...cartItems];
    setCount(count + 1);
    console.log('count', count);
    props.addToCart(currentItems[index], count);
  };

  const decreaseQuantity = (index) => {
    const currentItems = [...cartItems];
    if (currentItems[index].count > 0) {
      setCount(count - 1);
      props.removeFromCart(currentItems[index], count);
    }
  };

  const handleItemDelete = (index) => {
    const updatedItems = [...cartItems];
    props.addToCart(cartItems[index], 0);
    cartItems.splice(index, 1);
    setItem(updatedItems);
  };

  return (
    <div>
      <div className="cart-total">
        Total:{' $'}
        {cartItems
          .reduce((a, c) => {
            return a + c.price * c.count;
          }, 0)
          .toFixed(2)}
      </div>
      <div>{/* {isLoggedIn ? "Welcome to Your Cart" : <Login />} */}</div>
      {cartItems.map((item, i) => {
        return (
          <div className="cart-container" key={item.id}>
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
                value={item.count}
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
  );
};

const mapStateToProps = (state) => {
  return {
    cartItem: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product, count) => dispatch(addToCart(product, count)),
    removeFromCart: (product, count) =>
      dispatch(removeFromCart(product, count)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewCart);
