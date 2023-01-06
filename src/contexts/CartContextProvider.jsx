import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productItem, qty) => setCart([...cart, { ...productItem, qty: qty }]);
  
  const cartTotalPrice = () => {
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    return total;
  };

  const quitToCart = (productItem) => {};

  const contextValues = {
    cart,
    setCart,
    addToCart,
    quitToCart,
    cartTotalPrice, 
  };

  return (
    <CartContext.Provider value={contextValues}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
