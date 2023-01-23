import React from 'react';
import Cart from './Cart';
import '../styles/Header.css'; 
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className='web-header sticky top-0 w-screen'>
    <nav>
      <ul>
        <Link to={'/'} className="opacity-60 hover:opacity-100 duration-150">
          <li>INICIO</li>
        </Link>
        <Link to={'/products'} className="opacity-60 hover:opacity-100 duration-150">
          <li>PRODUCTOS</li>
        </Link>
        <Link to={'/contact'} className="opacity-60 hover:opacity-100 duration-150">
          <li>CONTACTANOS</li>
        </Link>
      </ul>
      <Cart />
    </nav>
  </header>;
};

export default Header;
