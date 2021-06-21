import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <img className="productImage" src={item.imageURL} alt={item.name} />
      <Link to={`/products/${item.id}`} className="itemName">
        {item.name}
      </Link>
      <div className="productPrice">$ {item.price}</div>
      <div className="buttonSpacing">
        <button className="buttonDesign">Add to Cart</button>
      </div>
      {/* <button onClick={() => loadItemToCart(item)}>Add To Cart</button> */}
    </div>
  );
};

export default ProductCard;
