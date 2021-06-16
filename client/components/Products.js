import React from 'react';

function FrogPicList() {
  const elements = [];

  for (let i = 0; i < 20; i++) {
    elements.push(
      <div key={i}>
        <img
          className="productImage"
          src="https://cdn11.bigcommerce.com/s-ob7m2s98/images/stencil/1000x1000/products/1171/10813/happy_frog__74222.1446407217.jpg?c=2"
        />
        <h2 className="productDescription">Jumping Frog</h2>
        <h3 className="productDescription">$42.99</h3>
        <div className="buttonDesign">
        <button>Add To Cart</button>
        </div>
      </div>
    );
  }
  return elements;
}

export default class Products extends React.Component {
  render() {
    return (
      <>
        <h1><span className="flipH">𓆏</span> SPACE HOPPER 𓆏 </h1>
        <h1>THE PLACE TO HOP UP YOUR SPACE</h1>
        <div className="productFormat">
          <FrogPicList />
          <div></div>
        </div>
      </>
    );
  }
}
