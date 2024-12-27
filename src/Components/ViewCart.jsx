import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const ViewCart = ({cart, setCart}) => {
  const [ total, setTotal ] = useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr) => acc + parseInt(curr.price),0));
  },[cart])
  return (
    <div>
      {
        cart == 0 ? <div className='h-screen'>
        <h1 className='text-center font-medium text-2xl p-2'>Your cart is empty</h1>
        <Link to="/">
        <div className='text-center m-4'>
        <button className='bg-yellow-700 hover:bg-yellow-800 px-4 p-2 text-white text-xl font-medium text-center'>Go To Shopping</button>
        </div>
        </Link>
        
        </div> :
        <>
        <h1 className='text-2xl font-semibold text-center p-3'>Cart Products</h1>
        {cart.map((product, index) => (
          <div key={index} className='flex justify-start items-center gap-5 p-2 m-3 md:mx-10 border border-gray-400 rounded-sm'>
          <div>
          <img className='w-32 border' src={product.img} alt={product.alt} />
          </div>
          <div>
          <h1 className='text-xl font-medium'>{product.name}</h1>
          <h1 className='text-xl font-medium'>{product.price}</h1>
          </div>
          </div>
        ))}
        
        
          <h1 className='text-2xl font-medium p-5 m-5'>Total Amount <strong>RS. {total}</strong> </h1>
        </>
        
      }
      
      
    </div>
  )
}

export default ViewCart
