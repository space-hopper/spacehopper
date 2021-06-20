import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const ProductCard = ({ item }) => {

const [value, setValue] = useState(1);

  return (
    <div className="product-card">
      <Link to={`/products/${item.id}`}><img className="productImage" src={item.imageURL} alt={item.name} /></Link>
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
