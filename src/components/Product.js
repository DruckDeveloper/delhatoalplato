import React from "react";
import { FaCartPlus } from 'react-icons/fa'
const Product = (props) => {
  //   <div className="w-full h-[300px] bg-[#011526] text-white" key={props.id}>
  //   {props.title}
  // </div>
  console.log(props);
  //Desestructure product prop
  return (
    <div className="border border-[#E4E4E4] mb-4 h-[300px] relative overflow-hiden group transition">
      <div className="w-full h-full flex justify-center items-center">
        {/* import product image */}
        <div className="w-[300px] mx-auto flex justify-center items-center">
          <img className="max-h-[200px] group-hover:scale-110 transition duration-300" src={props.image}/>
        </div>
      </div>
      {/* add to cart button */}
      <div className="flex justify-center items-center gap-[5px] text-[20px] rounded-md hover:cursor-pointer">
        <FaCartPlus className="text-[20px]"/> 
        <button>AÑADIR AL CARRITO</button>
      </div>
    </div>
  );
};

export default Product;
