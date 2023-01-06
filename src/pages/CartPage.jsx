import React, { useContext } from 'react'
import CartItem from '../components/CartItem';
import CartContext from "../contexts/CartContext";


const CartPage = () => {
  const { cart, cartTotalPrice } = useContext(CartContext); 
  console.log(cart)
  let totalPrice = cartTotalPrice(); 
  console.log(totalPrice)
  return (
    <div>
      <h2 className="text-center">
        {cart.length === 0
          ? "Aun no has añadido productos al carrito"
          : "Tus productos"}
      </h2>
      {cart.map((item) => {
        return <CartItem 
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          qty={item.qty}
        />
      })}
        <h3 className='text-center text-[20px]'>Total: {totalPrice}</h3>
    </div>
  )
}

export default CartPage