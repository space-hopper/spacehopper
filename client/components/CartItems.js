import React from 'react'


export default class ProductCard extends React.Component {
  
  render() {
    const [value, setValue] = useState(1);
    const item = this.props.item;
      return (
     <div className="product-card" key={item.id}>
     <img className="productImage" src={item.imageURL} alt={item.name} />
     <div className="itemName">{item.name}</div>
     <div className="productPrice">$ {item.price.toFixed(2)}</div>
     <div className="buttonSpacing"></div>
     <button
       className="buttonDesignQ" productId={item.id}
       onClick={() => setValue(value + 1)}
     >
       +
     </button>
     <input
       className="quantityButton" productId={item.id}
       onChange={(e) => setValue(e.target.value)}
       value={value} 
     />
     <button
       className="buttonDesignQ" productId={item.id}
       onClick={() => {value > 0 ? setValue(value - 1) : ''}}
     >
       -
     </button>
   </div>
      )
  }
}

