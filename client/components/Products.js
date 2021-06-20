import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux/actions/ProductThunks';
import ProductCard from './ProductCard';


// import { addToCart } from '../redux/actions/Car</Link>tThunks'

export class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadProducts();
    //  this.props.loadItemToCart();
  }

  render() {
    const products = this.props.products;
    return (
      <div className="products-page">
        <p className="page-heading">All Products</p>
        <div className="products-container">
          {!products ? (
            <h3>YOU NEED SOME FROGS</h3>
          ) : (
            products.map((item) => {
              return <ProductCard key={item.id} item={item}  />;
            })
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(fetchProducts()),
  // loadItemToCart: (id) => dispatch(addToCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
