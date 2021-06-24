import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/CartThunks';
import { fetchSingleProduct } from '../redux/reducers/singleProductReducer';

class SingleProduct extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadSingleProduct(id);
  }
  render() {
    return (
      <div className="single-product">
        <h1>{this.props.product.product && this.props.product.product.name}</h1>
        <img
          className="productImage"
          src={
            this.props.product.product && this.props.product.product.imageURL
          }
        />
        <p className="productPrice">
          $ {this.props.product.product && this.props.product.product.price}
        </p>
        <p>
          This quality decor item will undoubtedly add some amphibian charm to
          any space!
        </p>
        <button
          className="glow-on-hover" type="button"
          onClick={() => {
            this.props.addToCart(this.props.product.product, 1);
          }}
        >
          Add To Cart
        </button>
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
    loadSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
    addToCart: (product, count) => dispatch(addToCart(product, count)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
