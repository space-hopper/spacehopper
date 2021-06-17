import React from 'react';
import Link from 'react-router-dom';

export default class SingleProduct extends React.Component {
  render() {
    return (
      <div>
        <h1>Froggy Product</h1>
        <img
          className="productImage"
          src="https://cdn11.bigcommerce.com/s-ob7m2s98/images/stencil/1000x1000/products/1171/10813/happy_frog__74222.1446407217.jpg?c=2"
        />
        <p>
          This is a description for a cute/tacky/horrid/questionable froggy
          product for your home.
        </p>
      </div>
    );
  }
}
