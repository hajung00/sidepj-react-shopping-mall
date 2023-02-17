import React, { useEffect, useState } from 'react';
import Nav from './Navlist.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SearchOutlined, ShoppingOutlined } from '@ant-design/icons';

const Navlist = ({ scroll }) => {
  let navigate = useNavigate();
  const [search, onChangeSearch] = useState('');
  const onNavigate = (link) => {
    navigate(`/${link}`);
  };

  let product = [];
  let searchProduct = '';
  const getProduct = async () => {
    await axios.get(`http://localhost:3000/shoes`).then((result) => {
      product = [...result.data];
      console.log(product);
    });
    await axios.get(`http://localhost:3000/top`).then((result) => {
      product = [...product, ...result.data];
      console.log(product);
    });
    await axios.get(`http://localhost:3000/outer`).then((result) => {
      product = [...product, ...result.data];
      console.log(product);
    });
    await axios.get(`http://localhost:3000/bottom`).then((result) => {
      product = [...product, ...result.data];
      console.log(product);
    });
    await axios.get(`http://localhost:3000/ops`).then((result) => {
      product = [...product, ...result.data];
      console.log(product);
    });
    await axios.get(`http://localhost:3000/bag`).then((result) => {
      product = [...product, ...result.data];
      console.log(product);
    });
  };

  const onSearch = async () => {
    await getProduct();
    searchProduct = product.find(
      (item) =>
        item.title.replace(/ /g, '') === search.replace(/ /g, '').toUpperCase()
    );
    navigate('/detail/' + searchProduct.title.replace(/ /g, ''), {
      state: searchProduct,
    });
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
          <input
            type='text'
            value={search}
            onChange={(e) => {
              onChangeSearch(e.target.value);
            }}
          ></input>
          <span>
            <SearchOutlined onClick={onSearch} />
          </span>
        </div>
        <ul className='nav-my'>
          <li
            onClick={() => {
              onNavigate('login');
            }}
          >
            LOGIN
          </li>
          <li
            onClick={() => {
              onNavigate('join');
            }}
          >
            JOIN
          </li>
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
