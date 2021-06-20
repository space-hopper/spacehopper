import React, {useState} from 'react';

const ProductCard = ({ item }) => {

const [value, setValue] = useState(1);

  return (
    <div className="product-card">
      <img className="productImage" src={item.imageURL} alt={item.name} />
      <div className="itemName">{item.name}</div>
      <div className="productPrice">$ {item.price}</div>
      <div className="buttonSpacing">
        <button className="buttonDesign">Add to Cart</button>
      </div>
      <div>
        <button className="buttonDesignQ" onClick={() => setValue((value + 1))}>+</button>
         <input className="quantityButton" onChange={e => setValue(e.target.value)}value={value} />
         <button className="buttonDesignQ" onClick={() => setValue((value - 1))}>-</button>
    </div>
    </div>
  );
};

export default ProductCard;
