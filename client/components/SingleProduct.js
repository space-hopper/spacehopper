import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleProduct } from '../store/products';

class SingleProduct extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log('product id>>>', id);
    this.props.loadSinglProduct(id);
  }
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

const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSinglProduct: (id) => dispatch(fetchSingleProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
