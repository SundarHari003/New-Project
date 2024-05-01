import React from 'react'
import { IoMenuOutline } from 'react-icons/io5'
import Doordash from '../assests/icons/Doordash.png'
const Navbar = () => {
  return (
    <div className=' w-full flex justify-center my-[1.20rem] '>
        <nav className=' grid grid-cols-[35%,1fr] w-full lg:w-[88.5%] mx-1'>
            <div className=' flex items-center gap-3' >
                <IoMenuOutline size={26}/>
                <div className=' flex gap-1 items-center'>
                    <img src={Doordash} alt="webicon" className=' h-6 w-12 '/>
                    <h2 className=' tracking-widest text-primary text-xl font-bold  '>DOORDASH</h2>
                </div>
                <div className=' mx-3'>
                    <button type="button" className=' bg-black text-white  px-3 pt-[0.45rem] pb-[0.3rem] font-semibold rounded-full text-sm'>Delivery</button>
                    <button type="button" className=' px-3 font-semibold'>Pickup</button>
                </div>
                <div className=' w-[0.1rem] h-5 bg-slate-300'>

                </div>
            </div>
            <div className=' bg-primary'>
                    world
            </div>
        </nav>
    </div>
  )
}

export default Navbar