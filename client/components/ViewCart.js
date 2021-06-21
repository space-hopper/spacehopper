import React, {useState} from 'react';
import {connect} from 'react-redux';




const Cart = ({cartItem}) => {

    const [value, setValue] = useState(1);

    return (
    <div className="product-card">
        <img className="productImage" src={cartItem.imageURL} alt={cartItem.name} />
      <div className="itemName">{cartItem.name}</div>
      <div className="productPrice">$ {cartItem.price}</div>
      <div className="buttonSpacing">
      </div>
        <button className="buttonDesignQ" onClick={() => setValue(value + 1)}>
          +
        </button>
        <input
          className="quantityButton"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button className="buttonDesignQ" onClick={() => setValue(value - 1)}>
          -
        </button>
        <div>
          Total:
        </div>
        </div>
        )
}


const mapStateToProps = (state) => {
  return {
  cartItem: state.cart
}
}

export default connect(mapStateToProps, null)(Cart);