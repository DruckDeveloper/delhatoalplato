import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productItem, qty) => setCart([...cart, { ...productItem, qty: qty }]);
  
  const cartTotalPrice = () => {
    const total = cart.reduce((acc, product) => acc + product.price * product.qty, 0);
    return total.toString();
  };

  const decrementCart = (productId) => {
    setCart()
  }

  const removeCartItem = (productId) => {
    setCart((cartprev) =>  cartprev.filter((item) => item.id !== productId ))
  }

  
  const contextValues = {
    cart,
    setCart,
    addToCart,
    removeCartItem, 
    cartTotalPrice, 
  };

  return (
    <CartContext.Provider value={contextValues}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
