import React, { useState } from 'react';
import { connect } from 'react-redux';

const Cart = (props) => {
  const cartItems = props.cartItem.cartItems;
  return (
    <div>
      {cartItems.map((item) => {
        return <CartItems key={item.id}/>
      })}
        Total:{' $'}
        {cartItems
          .reduce((a, c) => {
            return a + c.price * value;
          }, 0)
          .toFixed(2)}
      </div>
  )
};

const mapStateToProps = (state) => {
  return {
    cartItem: state.cart,
  };
};

export default connect(mapStateToProps, null)(Cart);
