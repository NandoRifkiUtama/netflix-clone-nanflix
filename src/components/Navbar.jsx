import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white py-6 px-8'>
        <div className='flex justify-between items-center'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NANFLIX</h1>
        <div className='flex justify-center items-center'>
            <p className='mr-6 cursor-pointer hover:scale-105 duration-100'>Sign In</p>
            <p className='bg-red-600 px-3 py-2 rounded-lg cursor-pointer hover:scale-105 duration-100'>Sign Up</p>
        </div>
        </div>
    </div>
  )
}

export default Navbar