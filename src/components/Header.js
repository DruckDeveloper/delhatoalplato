import React from 'react';
import Cart from './Cart';
import '../styles/Header.css'; 
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className='web-header'>
    <nav>
      <ul>
        <Link to={'/'}>
          <li>HOME</li>
        </Link>
        <Link to={'/products'}>
          <li>PRODUCTS</li>
        </Link>
        <Link to={'/contact'}>
          <li>CONTACT</li>
        </Link>
      </ul>
    </nav>
    <Cart />
  </header>;
};

export default Header;
