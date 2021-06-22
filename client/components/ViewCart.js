import React, {useState} from 'react';
import { connect } from 'react-redux';


const ViewCart = (props) => {
 
  const [count, setCount] = useState(1)
  const cartItems = props.cartItem.cartItems;

  const increaseQuantity = index => {
    const currentItems = [...cartItems];
    console.log(currentItems)
    currentItems[index].count += 1;
    setCount(currentItems);
  };

  const decreaseQuantity = index => {
    const currentItems = [...cartItems];
    if (currentItems[index].count > 0) {
      currentItems[index].count -= 1;
      setCount(currentItems);
    }
  };

    return (
      <div>
        {cartItems.map((item, i) => {
          return (
            <div className="product-card" key={item.id}>
              <img
                className="productImage"
                src={item.imageURL}
                alt={item.name} />
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
              className="quantityButton"
              onChange={(e) => setQuantity(e.target.value)}
              value={item.count}
            />
              <button
                className="buttonDesignQ"
                onClick={() => decreaseQuantity(i)}
              >
                -
              </button>
            </div>
          );
        })}
        Total:{' $'}
        {cartItems
          .reduce((a, c) => {
            return a + c.price * c.count;
          }, 0)
          .toFixed(2)}
      </div>
    );
  }


const mapStateToProps = (state) => {
  return {
    cartItem: state.cart,
  };
};

export default connect(mapStateToProps, null)(ViewCart);
