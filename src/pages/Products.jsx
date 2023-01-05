import React from "react";
//Import product data
import productsData from "../contexts/ProductsData";
//import product component
import Product from "../components/Product";
//Import category cards 
import CategoryCard from '../components/CategoryCard'; 
//Import category images 
import categoryRes from '../img/products/category-res.jpg'; 
import categoryCerdo from '../img/products/category-cerdo.jpg'; 
import categoryPollo from '../img/products/category-pollo.jpg'; 
import categoryAll from '../img/products/category-all.jpg'; 

const Products = () => {
  console.log(productsData);

  return (
    <div>
      {/* categories section */}
      <section className="w-full grid grid-cols-2 md:grid-cols-4">
        <CategoryCard cat_image={categoryAll} cat_name="todos"/>
        <CategoryCard cat_image={categoryRes} cat_name="carne de res"/>
        <CategoryCard cat_image={categoryCerdo} cat_name="carne de cerdo"/>
        <CategoryCard cat_image={categoryPollo} cat_name="pollo"/>
      </section>
      {/* products section */}
      <section className="gap-[50px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 xl-grid-cols-5 gap-[50px] mx-auto md:max-w-none md:mx-0">
            {productsData.map((product) => {
              return (
                <Product
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  stock={product.stock}
                  description={product.description}
                  key={product.id}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
