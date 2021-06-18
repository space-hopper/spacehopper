import React from 'react';
import {connect} from 'react-redux'
import {fetchProducts} from '../redux/actions/ProductThunks'
import { addToCart } from '../redux/actions/CartThunks'

// function FrogPicList() {
//   const elements = [];

//   for (let i = 0; i < 20; i++) {
//     elements.push(
//       <div key={i}>
//         {/* <Link to={`/products/${product.id}`}> */}
//         <img
//           className="productImage"
//           src="https://cdn11.bigcommerce.com/s-ob7m2s98/images/stencil/1000x1000/products/1171/10813/happy_frog__74222.1446407217.jpg?c=2"
//         />
//         {/* </Link> */}
//         <h2 className="productDescription">Jumping Frog</h2>
//         <h3 className="productDescription">$42.99</h3>
//         <div className="buttonDesign">
//           <button>Add To Cart</button>
//         </div>
//       </div>
//     );
//   }
//   return elements;
// }

class Products extends React.Component {
 constructor(props){
   super(props)
   console.log("constructor props", props)
   this.state = {
     product: null
   }
 }

 componentDidMount(){
   this.props.loadProducts();
   this.props.loadItemToCart();
 }

  render() {
    const {product} = this.state
    const products = this.props.products;
    console.log(products)
    return (
      <>
        <h1><span className="flipH">𓆏</span> SPACE HOPPER 𓆏 </h1>
        <h1>THE PLACE TO HOP UP YOUR SPACE</h1>
        <div className="productFormat">
          {this.props.products.map((item) => {
            <>
            <li key={item.id}></li>
            <div className="product-image">
            <img src={item.image} alt={item.name}></img>
            <div className="product-price">
            <div>{item.price}</div>
            <button onClick={() => this.props.addToCart(item)}>Add To Cart</button>
            </div>
            </div>
            </>
          })}
          {/* <FrogPicList /> */}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(fetchProducts()),
  loadItemToCart: (id) => dispatch(addToCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)