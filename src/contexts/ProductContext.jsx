//import hooks
import React, { createContext, useState, useEffect } from "react";
//Import constant with products data 
import productsData from "./ProductsData";

//Create product context
export const ProductContext = createContext();
//Create product state
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  //Fetch products from the JSON file
  useEffect(() => {
    const fetchProducts = () => {
      const data = productsData;
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
