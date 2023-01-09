import React from 'react';
import Nav from './Navlist.css';
import { useNavigate } from 'react-router-dom';
import { SearchOutlined, ShoppingOutlined } from '@ant-design/icons';

const Navlist = () => {
  let navigate = useNavigate();
  const onNavigate = (link) => {
    navigate('/link');
  };

  return (
    <nav className='nav-wrapper'>
      {/* <Navbar bg="white" variant="white">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <div className='nav-item'>
        <p className='nav-logo'>Shop</p>
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
            <ShoppingOutlined />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navlist;
