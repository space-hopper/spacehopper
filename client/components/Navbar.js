import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import Products from './Products';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';




const Navbar = ({ handleClick, isLoggedIn }) => { 
  const sidebar = <ProSidebar>
  <Menu iconShape="square">
    {!isLoggedIn ? <MenuItem><Link to="/login">Login</Link></MenuItem> : <MenuItem>Logout</MenuItem>}
    <SubMenu title="Components">
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>;

  return(


  <div>
     <div>
        {sidebar}
    </div>
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
          <Products />
        </div>
      )}
    </nav>
  </div>
)}

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

export default connect(mapState, mapDispatch)(Navbar);
