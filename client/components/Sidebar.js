import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaList, FaShoppingCart } from 'react-icons/fa';
import {
  FiHome,
  FiLogIn,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from 'react-icons/fi';

const Sidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <div id="sidebar">
      <ProSidebar collapsed={menuCollapse}>
        <SidebarHeader>
          <div className="logotext">
            <p>{menuCollapse ? 'SH' : 'Space Hopper'}</p>
          </div>
          <div onClick={menuIconClick}>
            {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon={<FiHome />}>
              Home <Link to="/" />
            </MenuItem>
            <MenuItem icon={<FiLogIn />}>
              Login <Link to="/login" />
            </MenuItem>
            <MenuItem icon={<FaList />}>
              Products
              <Link to="/products" />
            </MenuItem>
            <MenuItem icon={<FaShoppingCart />}>
              Cart
              <Link to="/cart" />
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
