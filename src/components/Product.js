import React from "react";
import {ProductContext} from '../App'; 
import { useContext } from 'react'; 
import { FaCartPlus } from "react-icons/fa";

const Product = (props) => {
  const cartArray = useContext(ProductContext)
  const cartAction = _ => {
    cartArray.push("a"); 
    console.log(cartArray); 
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
        <h2 className="text-[25px]">{props.title}</h2>
        <span className="font-bold text-[25px]">${props.price}</span>
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
      <div className="p-2 flex justify-center items-center gap-[5px] sm:text-[15px] md:text-[25px] text-white font-bold bg-[#A36047] rounded-md hover:cursor-pointer">
        <FaCartPlus className="text-white sm:text-[15px] md:text-[25px]" />
        <button>AÑADIR AL CARRITO</button>
      </div>
    </div>
  );
};

export default Product;
