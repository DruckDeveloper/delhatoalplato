import React, { useContext } from 'react'
//Import product contect 
import { ProductContext } from '../contexts/ProductContext'; 
import Banner from '../components/Banner';
import AboutSlider from '../components/AboutSlider';

const Home = () => {
  const { products } = useContext(ProductContext); 
  console.log(products)
  return (
    <> 
      <Banner />
      <AboutSlider/>
    </>
  );
}; 

export default Home