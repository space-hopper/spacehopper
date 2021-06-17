import React from 'react';
import { Link } from 'react-router-dom';
import emptyCartImage from '../../../public/images/empty-cart.svg';

const EmptyCartPage = () => {
  return (
    <div className="empty-cart-section">
      <p>Your Shopping Cart is Empty 😞</p>
      <img src={emptyCartImage} alt="Person with an empty cart" />
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default EmptyCartPage;
