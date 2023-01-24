import React from "react";
import CartItemCount from "./CartItemCount";

const CartItem = ({id, title, qty, image, price}) => {

  return (
    <section className="mx-auto my-10 w-4/5 h-[200px]">
      <article className="flex justify-center w-full h-full gap-3">
        <div className="w-[200px]">
          <img className="w-full" src={image} alt={title} />
        </div>
        <div>
          <h2 className="text-[20px]">{title}</h2>
          <span className="text-[15px]">${price}</span>
          <CartItemCount initial={qty} item={id}/>
        </div>
      </article>
    </section>
  );
};

export default CartItem;
