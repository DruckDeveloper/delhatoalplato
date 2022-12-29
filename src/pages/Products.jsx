import React from "react";
//Import product contect
import productsData from "../contexts/ProductsData";

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl-grid-cols-5 gap-[30px]">
            {filteredProducts.map((product) => {
              return (
                <div
                  className="w-full h-[300px] bg-[#011526]"
                  key={product.id}
                >
                  {product.title}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
