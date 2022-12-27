//import hooks 
import React, {createContext, useState, useEffect} from 'react';

//Create product context 
export const ProductContext = createContext(); 
//Create product state
const ProductProvider =  ({children}) => {
const [products, setProducts] = useState([]); 
//Fetch products from the JSON file
useEffect(() => {
  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products'); 
    const data = await response.json(); 
    console.log(data); 
  }; 
  fetchProducts();  
}, [])
  return <ProductContext.Provider>{children}</ProductContext.Provider>;
};

export default ProductProvider;
