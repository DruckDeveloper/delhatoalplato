import React, { useContext } from "react";
import ReactWhatsapp from "react-whatsapp";
import { IoLogoWhatsapp } from 'react-icons/io'
import CartItem from "../components/CartItem";
import CartContext from "../contexts/CartContext";

const CartPage = () => {
  const { cart, cartTotalPrice } = useContext(CartContext);
  console.log(cart);

  return (
    <div>
      <h2 className="text-center">
        {cart.length === 0 ? "El carrito esta vacio" : "Productos:"}
      </h2>
      {cart.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            qty={item.qty}
          />
        );
      })}
      <h3 className="text-center text-[20px]">Total: ${cartTotalPrice()}</h3>
      <ReactWhatsapp
        number="57-316-463-3038"
        message={`Me gustaria adquirir los siguientes productos:\n ${cart.map(
          (smsItem) => {
            return (
              smsItem.title +
              " " +
              "Precio " +
              smsItem.price +
              "\n" +
              "cantidad: " +
              smsItem.qty +
              "\n"
            );
          }
        )} Total:  $${cartTotalPrice()}`}
        className="flex justify-center items-center w-full"
      >
        <div className="my-[15px] text-[20px] text-[#ffffff] font-bold p-5 rounded-lg bg-[#25D366] flex justify-items items-center gap-1">
          <IoLogoWhatsapp className="text-[#ffffff] text-[20px]" />
          Realizar pedido
        </div>
      </ReactWhatsapp>
    </div>
  );
};

export default CartPage;
