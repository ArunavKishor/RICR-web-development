import React from 'react'
import logotransparent from "../assets/logotransparent.png"

const Header = () => {
  return (
    <>
    <div className='bg-(--primary) px-4 py-2'>
        <div className='flex'>
            <img src={logotransparent} alt="" className='h-12 w-20 object-cover'/>
            <h1 className=' text-3xl font-bold italic text-white mt-1'>CRAVING'S</h1>
        </div>
    </div>
            
            
    </>
  )
}

export default Header