import React from "react";

const CartItem = (props) => {
  return (
    <section className="mx-auto my-10 w-4/5 h-[200px]">
      <article className="flex justify-center w-full h-full gap-3">
        <div className="w-[200px]">
          <img className="w-full" src={props.image} alt={props.title} />
        </div>
        <div>
          <h2 className="text-[20px]">{props.title}</h2>
          <span className="text-[15px]">${props.price}</span>
        </div>
        <button className="m-right text-[30px]">X</button>
      </article>
    </section>
  );
};

export default CartItem;
