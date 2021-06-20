import React, {useState} from 'react';
import {connect} from 'react-redux'



export class Cart extends React.Component {


  render(){
    const [value, setValue] = useState(1);
    const cartItem = this.props.cartItem;

    return (
    <div className="product-card">
        <img className="productImage" src={cartItem.imageURL} alt={product.name} />
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
}


const mapStateToProps = (cartItem) => {
  cartItem = state.cartItem
}

export default connect(mapStateToProps)(Cart);