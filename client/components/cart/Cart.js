import React from 'react';
import { connect } from 'react-redux';
import { fetchCart } from '../../store/cart';
import EmptyCartPage from './EmptyCartPage';

class Cart extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // placeholder of 1 for the userId until we have user data
    this.props.getCart(1);
  }

  render() {
    const { cart } = this.props;
    console.log('cart', cart);
    return (
      <div>
        <h1>View Cart</h1>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getCart: (userId) => dispatch(fetchCart(userId)),
  };
};

export default connect(mapState, mapDispatch)(Cart);
