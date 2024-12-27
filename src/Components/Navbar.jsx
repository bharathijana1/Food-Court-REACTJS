import React from 'react'
import { Link, Links } from "react-router-dom";


const Navbar = ({cart}) => {
  return (
    <div className='bg-yellow-700 flex justify-between items-center p-1'>
        <div>
            <Link to="/" className='flex justify-center items-center gap-1 md:gap-2 '>
            <img src="../src/Components/img/food-tray.png" alt="logo" className='w-10 md:w-16 md:ms-4 p-1' />
            <h1 className='text-xl md:text-2xl text-white font-medium'>Food Court</h1>
            </Link>
        </div>
        <div className='flex justify-center items-center text-white gap-3 text-xl md:text-2xl font-medium cursor-pointer px-4'>
            <Link to='/'>
            <h1 className='hover:underline mx-2'>Home</h1>
            </Link>
            <Link to="/cart">
            <h1 className='hover:underline mx-2'> Cart <span className='rounded-full bg-white text-black p-1 px-3'>{cart.length}</span> </h1>
            </Link>
        </div>
      
    </div>
  )
}

export default Navbar
