import React, { useContext } from 'react'
import CartItem from '../components/CartItem';
import CartContext from "../contexts/CartContext";


const CartPage = () => {
  const { cart } = useContext(CartContext); 
  console.log(cart)
  return (
    <div>
      {cart.map((item) => {
        return <CartItem 
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
        />
      })}
    </div>
  )
}

export default CartPage