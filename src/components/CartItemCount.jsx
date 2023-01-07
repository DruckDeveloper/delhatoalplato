import React from "react";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { useState } from "react";


const CartItemCount = ({ initial,  item}) => {
  const [qty, setQty] = useState(initial);
  const {removeCartItem } = useContext(CartContext)

  const increaseQty = () => {
    setQty(qty + 1);
  };
  const decreaseQty = () => {
    if(qty > initial){
      setQty(qty - 1); 
    }
  }

  const removeFromCart = () => removeCartItem(item);
  
  return (
    <div>
      <div className="text-[25px] flex justify-center gap-1">
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
        onClick={removeFromCart}>
          <button>ELIMINAR</button>
      </div>
    </div>
  );
};

export default CartItemCount;
