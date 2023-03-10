import React from "react";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";


const ItemCount = ({ initial,  item}) => {
  const [qty, setQty] = useState(initial);

  const { addToCart } = useContext(CartContext); 
  const addItem = () => {
    addToCart(item, qty) 
  }

  const increaseQty = () => {
    setQty(qty + 1);
  };
  const decreaseQty = () => {
    if(qty > initial){
      setQty(qty - 1); 
    }
  }

  
  return (
    <div>
      <div className="text-[25px] flex justify-center gap-10">
        <button
          onClick={decreaseQty}
        >
          -
        </button>
        <span className="text-[25px]">{qty}</span>
        <button onClick={increaseQty}>+</button>
      </div>
        <div 
        className="p-2 flex justify-center items-center gap-[5px] sm:text-[15px] md:text-[25px] text-white font-bold bg-[#A36047] rounded-md hover:cursor-pointer" 
        onClick={addItem}>
          <FaCartPlus className="text-white sm:text-[15px] md:text-[25px]" />
          <button className="text-[20px] sm:text-[15px]">AÑADIR AL CARRITO</button>
      </div>
    </div>
  );
};

export default ItemCount;
