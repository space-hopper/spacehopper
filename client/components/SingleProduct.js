import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleProduct } from '../redux/reducers/singleProductReducer';

class SingleProduct extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadSingleProduct(id);
  }
  render() {
    return (
      <div>
        <h1>{this.props.product.product && this.props.product.product.name}</h1>
        <h3>{this.props.product.product && this.props.product.product.price}</h3>
        <div className="buttonDesign">
          <button>Add To Cart</button>
        </div>
        <img
          className="productImage"
          src={this.props.product.product && this.props.product.product.imageURL}
        />
        <p>
          This quality decor item will undoubtedly add some amphibian charm to any space!
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
    loadSingleProduct: (id) => dispatch(fetchSingleProduct(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);