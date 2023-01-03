import React from 'react'
import { BsCart4 } from 'react-icons/bs'; 

const Cart = () => {
  return (
    <div className='inline-block hover:cursor-pointer'>
      <div className='flex items-center gap-[10px]'>
        <BsCart4 className='text-[30px] text-white'/>
        <span className='text-white sm:text-[10px] lg:text-[15px]'>CARRITO</span>
      </div>
    </div>
  )
}

export default Cart