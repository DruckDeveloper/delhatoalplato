import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productItem, qty) => setCart([...cart, { ...productItem, qty: qty }]);
  

  const quitToCart = (productItem) => {};

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
