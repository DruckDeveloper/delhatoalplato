import React from "react";
//Import product contect
import productsData from "../contexts/ProductsData";
//import product component
import product from "../components/Product";
import Product from "../components/Product";

const Products = () => {
  console.log(productsData);
  const filteredProducts = productsData.filter((item) => {
    return (
      item.category === "carne de res" ||
      item.category === "carne de cerdo" ||
      item.category === "pollo"
    );
  });
  console.log(filteredProducts);
  return (
    <div>
      <section className="gap-[50px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl-grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return (
                <Product
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  stock={product.stock}
                  tags={product.tags}
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
