import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productItem, qty) => {
    let item = { ...productItem, qty: qty };
    setCart([...cart, item]);
    console.log(cart);
  };

  const quitToCart = () => {};

  const contextValues = {
    cart,
    setCart,
    addToCart,
    quitToCart,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
