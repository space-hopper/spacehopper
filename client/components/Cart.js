import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const Cart = ({ isLoggedIn, handleClick }) => {
  const sidebar = (
    <ProSidebar className="cartSidebar">
      <Menu iconShape="square">
        <MenuItem>
          <Link to="/cart">My Cart</Link>
        </MenuItem>
        <SubMenu title="Items">
          <MenuItem>
            <img
              className="cartItem"
              src="https://cdn11.bigcommerce.com/s-ob7m2s98/images/stencil/1000x1000/products/1171/10813/happy_frog__74222.1446407217.jpg?c=2"
            ></img>
          </MenuItem>
          <MenuItem>
            <img
              className="cartItem"
              src="https://cdn11.bigcommerce.com/s-ob7m2s98/images/stencil/1000x1000/products/1171/10813/happy_frog__74222.1446407217.jpg?c=2"
            ></img>
          </MenuItem>
        </SubMenu>
        <SubMenu title="Total"></SubMenu>
      </Menu>
    </ProSidebar>
  );

  return (
    <div>
      <div>{sidebar}</div>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>

            <Link to="/">Cart</Link>

          </div>
        )}
      </nav>
    </div>
  );
};

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Cart);
