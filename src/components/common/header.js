import { NavLink } from "react-router-dom";
import { Button, Drawer } from 'antd';
import React, { useState } from 'react';

import logoBrand from '../../assets/images/gigalaptop.png';

import {
  MobileOutlined,
  MailOutlined,
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  UserOutlined,
  MenuOutlined
} from '@ant-design/icons';

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className='container'>
      {/* topbar */}
      <div className='topBar'>
        <div className='contactInfo'>
          <ul>
            <li><a href="tel:0346057088"><MobileOutlined /> <span>0346057088</span></a></li>
            <li><a href="mailto:tdhieu1599@gmail.com"><MailOutlined /> <span>tdhieu1599@gmail.com</span></a></li>
          </ul>
        </div>
        <div className='otherInfo'>
          <ul className='socialMedia'>
            <li><a href='https://www.google.com'><FacebookFilled /></a></li>
            <li><a href='https://www.google.com'><TwitterSquareFilled /></a></li>
            <li><a href='https://www.google.com'><InstagramFilled /></a></li>
          </ul>
          <button><UserOutlined /> My Account</button>
        </div>
      </div>
      {/* header */}
      <div className='header separator'>
        <div className="logo">
          GigaLaptops
        </div>  
        <div className="logoBrand"><img src={logoBrand} alt="logoBrand" /></div>

        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer placement="right" onClose={onClose} visible={visible}>
            <nav>
              <ul>
                <li><NavLink onClick={onClose} to="/">Home</NavLink></li>
                <li><NavLink onClick={onClose} to="/about">About</NavLink></li>
                <li><NavLink onClick={onClose} to="/shop">Shop</NavLink></li>
                <li><NavLink onClick={onClose} to="/faq">FAQ</NavLink></li>
                <li><NavLink onClick={onClose} to="/contact">Contact</NavLink></li>
              </ul>
            </nav>
          </Drawer>
        </div>
        <nav className="mobileHidden">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AppHeader;