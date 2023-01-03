import React from 'react';
import Cart from './Cart';
import '../styles/Header.css'; 
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className='web-header'>
    <nav>
      <ul>
        <Link to={'/'}>
          <li>INICIO</li>
        </Link>
        <Link to={'/products'}>
          <li>PRODUCTOS</li>
        </Link>
        <Link to={'/contact'}>
          <li>CONTACTANOS</li>
        </Link>
      </ul>
      <Cart />
    </nav>
  </header>;
};

export default Header;
