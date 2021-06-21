import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/actions/CartThunks';
import { connect } from 'react-redux';

class ProductCard extends React.Component {

  render(){
    const item = this.props.item;

     //make this button animate
     
    return (
    <div className="product-card">
      <Link to={`/products/${item.id}`}>
        <img className="productImage" src={item.imageURL} alt={item.name} />
      </Link>
      <div className="itemName">{item.name}</div>
      <div className="productPrice">$ {item.price}</div>
      <div className="buttonSpacing">
        <button onClick={() => {this.props.addToCart(item, 1)}} className="buttonDesign">
          Add to Cart
        </button>
      </div>
      </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product, count) => dispatch(addToCart(product, count)),
});

export default connect(null, mapDispatchToProps)(ProductCard);
