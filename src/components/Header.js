import React from 'react';
import Cart from './Cart';
import '../styles/Header.css'; 

const Header = () => {
  return <header className='web-header'>
    <nav>
      <ul>
        <li>HOME</li>
        <li>PRODUCTS</li>
        <li>CONTACT</li>
      </ul>
    </nav>
    <Cart />

  </header>;
};

export default Header;
