import React, { useEffect, useState } from 'react';
import Nav from './Navlist.css';
import { useNavigate } from 'react-router-dom';
import { SearchOutlined, ShoppingOutlined } from '@ant-design/icons';

const Navlist = ({ scroll }) => {
  let navigate = useNavigate();
  const onNavigate = (link) => {
    navigate(`/${link}`);
  };

  return (
    <nav className={`${scroll === true ? 'fix' : 'main'}-nav-wrapper`}>
      <div className='nav-item'>
        <p
          className='nav-logo'
          onClick={() => {
            onNavigate('');
          }}
        >
          Shop
        </p>
        <div className='nav-input'>
          <input type='text'></input>
          <span>
            <SearchOutlined />
          </span>
        </div>
        <ul className='nav-my'>
          <li>LOGIN</li>
          <li>JOIN</li>
          <li>MY PAGE</li>
          <li>
            <ShoppingOutlined
              onClick={() => {
                onNavigate('cart');
              }}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navlist;
