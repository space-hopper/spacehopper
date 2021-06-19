import React from 'react';
import {connect} from 'react-redux'
import {fetchProducts} from '../redux/actions/ProductThunks'
// import { addToCart } from '../redux/actions/CartThunks'

export class Products extends React.Component {

 componentDidMount(){
   this.props.loadProducts();
  //  this.props.loadItemToCart();
 }

  render() {
    const products = this.props.products;
    console.log(products)
    return (
        <>
        <h1><span className="flipH">𓆏</span> SPACE HOPPER 𓆏 </h1>
        <h1>THE PLACE TO HOP UP YOUR SPACE</h1>

        {!products ? (
              <h3>WHERE FOR ART OUR ITEMS</h3>
          ) : 
          products.map((item) => {
            return (
            <div key={item.id}>
            <div className="productFormat">
            <div className="flexBox">
            <img className="productImage" src={item.imageURL} alt={item.name} />
            <div className="itemName">{item.name}</div>
            <div className="productPrice">${item.price}</div>
            <div className="buttonSpacing">
            <button className="buttonDesign">Future Button</button>
            </div>
            {/* <button onClick={() => loadItemToCart(item)}>Add To Cart</button> */}
            </div>
            </div>
            </div>
            )
          })
        }    
  </>
 )}
}

const mapStateToProps = (state) => { 
  console.log('state', state)
  return ({
  products: state.productReducer
})}

const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(fetchProducts()),
  // loadItemToCart: (id) => dispatch(addToCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)