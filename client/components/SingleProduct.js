import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleProduct } from '../store/products';

class SingleProduct extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadSingleProduct(id);
    console.log('product id>>>', id);
    console.log("props!", this.props)
    console.log("PRODUCT!", this.props.product)
  }
  render() {
    // const dummyData = {name: "Sir William Jenkins McGee"}
    // const product = this.state.singleProductReducer.product
    // console.log("THIS PRODUCTTT", product)
    return (
      <div>
        <h1>fghsfdh</h1>
        <img
          className="productImage"
          src="https://cdn11.bigcommerce.com/s-ob7m2s98/images/stencil/1000x1000/products/1171/10813/happy_frog__74222.1446407217.jpg?c=2"
        />
        <p>
          This is a description for a cute/tacky/horrid/questionable froggy product for your home.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("STATE",state)
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
