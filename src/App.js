import React from 'react';
//Import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Import pages 
import Home from './pages/Home'
import Contact from './pages/Contact'
import Products from './pages/Products'
//Import components 
import Sidebar from './components/Sidebar' 
import Header from './components/Header' 
import Footer from './components/Footer' 

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/products' element={<Products />}  />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    <Sidebar />
    <Footer />
    </Router>
  </div>;
};

export default App;
