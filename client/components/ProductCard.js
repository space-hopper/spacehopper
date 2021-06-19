import React from 'react';

const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <img className="productImage" src={item.imageURL} alt={item.name} />
      <div className="itemName">{item.name}</div>
      <div className="productPrice">$ {item.price}</div>
      <div className="buttonSpacing">
        <button className="buttonDesign">Future Button</button>
      </div>
      {/* <button onClick={() => loadItemToCart(item)}>Add To Cart</button> */}
    </div>
  );
};

export default ProductCard;
