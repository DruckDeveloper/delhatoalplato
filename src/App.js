import React, { useState } from "react";
//Import react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import cart context 
import CartContextProvider from './contexts/CartContextProvider';
//Import pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import CartPage from "./pages/CartPage";
//Import components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  return (
    <CartContextProvider>
      <div className="overflow-hiden">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Sidebar />
          <Footer />
        </Router>
      </div>
    </CartContextProvider>
  
  )
};

export default App;
