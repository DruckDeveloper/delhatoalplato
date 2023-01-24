import React, { useState } from "react";
//Import product data
import productsData from "../contexts/ProductsData";
//import product component
import Product from "../components/Product";
//Import category cards
import CategoryCard from "../components/CategoryCard";
//Import category images
import categoryRes from "../img/products/category-res.jpg";
import categoryCerdo from "../img/products/category-cerdo.jpg";
import categoryPollo from "../img/products/category-pollo.jpg";

const Products = () => {
  const [userCategory, setUserCategory] = useState([...productsData]);

  const filterAll = () => {
    return productsData.filter((item) => item.category === userCategory);
  };
  const renderProducts = filterAll();

  return (
    <div>
      {/* categories section */}
      <section className="w-full grid grid-cols-3 items-center gap-[20px] m-[5px] rounded">
        <div onClick={() => setUserCategory("carne de res")}>
          <CategoryCard
            cat_image={categoryRes}
            action={setUserCategory}
            cat_name="Res"
          />
        </div>
        <div onClick={() => setUserCategory("carne de cerdo")}>
          <CategoryCard
            cat_image={categoryCerdo}
            action={setUserCategory}
            cat_name="Cerdo"
          />
        </div>
        <div onClick={() => setUserCategory("pollo")}>
          <CategoryCard
            cat_image={categoryPollo}
            action={setUserCategory}
            cat_name="Pollo"
          />
        </div>
      </section>
      {/* products section */}
      <section className="gap-[50px] py-[50px] md:p-[25px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 xl-grid-cols-5 gap-[50px] mx-auto md:max-w-none md:mx-0">
            {renderProducts.length > 0
              ? renderProducts.map((product) => {
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
                })
              : productsData.map((product) => {
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
