import React from 'react';
import { FaBox, FaChartBar, FaQrcode } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <NavLink to="/" className="sidebar-item" activeClassName="active" exact>
          <FaBox />
          <span>Menu 1</span>
        </NavLink>
        <NavLink to="/menu2" className="sidebar-item" activeClassName="active">
          <FaChartBar />
          <span>Menu 2</span>
        </NavLink>
        <NavLink to="/menu3" className="sidebar-item" activeClassName="active">
          <FaQrcode />
          <span>Menu 3</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
