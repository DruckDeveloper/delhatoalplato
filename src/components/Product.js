import React from "react";
import CartCOntext from "../contexts/CartContext";
import { useContext } from 'react'; 
import ItemCount from "./ItemCount";

const Product = (props) => {
  const cartContext = useContext(CartCOntext); 
  const { addToCart } = cartContext; 
  const onAdd = (qty) => {
    addToCart(Product, qty); 
  }

  let itemModel = {
    id: props.id, 
    title: props.title, 
    price: props.price, 
    image: props.image, 
  }
  
  return (
    <div className="border border-[#E4E4E4] mb-4 h-[300px] overflow-hiden group transition my-[50px] box-border">
      <div className="w-full flex justify-center items-center">
        {/* import product image */}
        <div className="w-[250px] mx-auto flex justify-center items-center">
          <img
            className="max-h-[200px] group-hover:scale-110 transition duration-300"
            src={props.image}
            alt={props.title}
          />
        </div>
      </div>
      {/* product information */}
      <div className="text-center">
        <h2 className="text-[20px]">{props.title}</h2>
        <span className="font-bold text-[20px]">${props.price}</span>
        <h3
          className={
            props.stock
              ? "font-bold text-[#00FF00] text-[15px]"
              : "font-bold text-[#FF0000] text-[15px]"
          }
        >
          {props.stock ? "Disponible" : "No disponible"}
        </h3>
      </div>
      {/* add to cart button */}
      <ItemCount initial={1} onAdd={onAdd} item={itemModel}/>
    </div>
  );
};

export default Product;
