import React, { useState } from 'react';
import { connect } from 'react-redux';

const Cart = (props) => {
  const [value, setValue] = useState(1);
  const cartItems = props.cartItem.cartItems;
  return (
    <div>
      {cartItems.map((item) => {
        return (
          <div className="product-card" key={item.id}>
            <img className="productImage" src={item.imageURL} alt={item.name} />
            <div className="itemName">{item.name}</div>
            <div className="productPrice">$ {item.price}</div>
            <div className="buttonSpacing"></div>
            <button
              className="buttonDesignQ"
              onClick={() => setValue(value + 1)}
            >
              +
            </button>
            <input
              className="quantityButton"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <button
              className="buttonDesignQ"
              onClick={() => setValue(value - 1)}
            >
              -
            </button>
          </div>
        );
      })}
      <div>
        Total:{' $'}
        {cartItems
          .reduce((a, c) => {
            return a + c.price * value;
          }, 0)
          .toFixed(2)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItem: state.cart,
  };
};

export default connect(mapStateToProps, null)(Cart);
