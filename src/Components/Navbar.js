import React, { useState } from 'react'
import { IoHelpBuoyOutline, IoMenuOutline, IoSearchOutline } from 'react-icons/io5'
import { RiArrowDropDownLine} from 'react-icons/ri'
import { HiShoppingCart } from 'react-icons/hi'
import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai'
import Doordash from '../assests/icons/Doordash.png'
import  { FaRegUser, FaXmark } from 'react-icons/fa6'
import {Link} from 'react-router-dom'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { BsBagCheck } from 'react-icons/bs'
import { FaRegUserCircle } from 'react-icons/fa'
const Navbar = () => {
    const[MenuIcon,setMenuIcon]=useState(false);
    const OpenMenu=()=>{
        setMenuIcon(!MenuIcon);
    }
  return (
    <div className=' w-full flex flex-col items-center  '>
        <nav className=' md:grid grid-cols-[auto,1fr] w-full lg:px-24 py-2  px-2 border-b border-b-gray-300 hidden'>
            <div className=' flex items-center gap-3' >
                <IoMenuOutline size={26} className=' cursor-pointer' onClick={OpenMenu}/>
                <div className=' flex items-center'>
                    <img src={Doordash} alt="webicon" className=' h-14'/>
                    <h2 className=' tracking-widest text-primary text-xl font-bold cursor-pointer hidden lg:block '>DOORDASH</h2>
                </div>
                <div className=' mx-1'>
                    <button type="button" className=' bg-black text-white  px-3 py-2 font-semibold rounded-full text-sm'>Delivery</button>
                    <button type="button" className=' px-3 font-semibold'>Pickup</button>
                </div>
                <div className=' w-[0.1rem] h-5 bg-slate-300'>

                </div>
            </div>
            <div className=' flex items-center gap-6 w-full'>
                <div className=' font-semibold hidden items-center gap-1 ms-7 w-fit lg:flex'>
                    Newyork <RiArrowDropDownLine className=' text-primary cursor-pointer' size={20}/>
                </div>
                <div className='w-[62%] lg:w-[48%] relative ms-7 lg:ms-0 '>
                    <label for="AllSearch" className=' absolute top-[0.6rem] left-2 px-4'><IoSearchOutline size={26}/></label>
                    <input type="text" name="search" id='AllSearch' placeholder=' Search stores, dishes, products' className=' bg-[#f7f7f7] rounded-full  px-14 py-3  placeholder:font-semibold placeholder:text-[#535353] text-base w-full'/>
                </div>
                <div className=' flex items-center gap-2 '>
                    <div className=' font-semibold flex items-center bg-primary rounded-full gap-3 text-white px-3 py-1 cursor-pointer'>
                        <HiShoppingCart size={25}/><span className=' text-base'>0</span>
                    </div>
                    <button className=' font-semibold mx-3 cursor-pointer'>SignIn</button>
                    <button className=' font-semibold bg-gray-300 rounded-full px-3 py-2 cursor-pointer'>SignUp</button>
                </div>
            </div>
        </nav>
        <nav className=' md:hidden flex justify-between w-full px-2 py-3 border-b border-b-gray-300'>
            <div className=' flex gap-3 items-center ps-5'>
                <IoMenuOutline size={26} className=' cursor-pointer' onClick={OpenMenu}/>
                <AiOutlineShoppingCart size={26} className=' cursor-pointer'/>
                <IoSearchOutline size={26} className=' cursor-pointer'/>
            </div>
            <div className=' flex gap-3 items-center'>
                <button className=' font-semibold text-base'>Login</button>
                <button className=' font-semibold text-white bg-primary px-3 py-2 rounded-full text-lg'>Open App</button>
            </div>
        </nav>
        <div className=' font-semibold flex justify-center py-3 items-center gap-1 w-full lg:hidden border-b border-b-gray-300'>
                    Newyork <RiArrowDropDownLine className=' text-primary cursor-pointer' size={20}/>
        </div>
        {
            (
              <div className={ `${MenuIcon?'translate-x-full':'translate-x-0'} bg-transparent fixed top-0 w-full z-20 bg-slate-500 transparent-back min-h-screen`}>
                    <nav className={`${MenuIcon?' w-0 ':' w-3/4 sm:w-2/4  md:w-2/5 lg:w-1/4'} relative duration-300 transition-all  bg-white shadow shadow-slate-700 min-h-screen `}>
                        <div className=' px-4 py-6 '> 
                            <FaXmark size={26} onClick={OpenMenu} className=' cursor-pointer'/>
                        </div>
                        <div>
                            <Link to="/" className=' flex gap-5 items-end  hover:bg-slate-200 p-4 font-semibold text-xl'><AiOutlineHome size={26} className=' text-gray-800'/>Home</Link><hr/>
                            <Link to="/" className=' flex gap-5 items-end  hover:bg-slate-200 p-4 font-semibold text-xl'><BsBagCheck size={26} className=' text-gray-800'/>Pickup</Link><hr/>
                            <Link to="/" className=' flex gap-5 items-end  hover:bg-slate-200 p-4 font-semibold text-xl'><MdOutlineLocalOffer size={26} className=' text-gray-800 rotate-90'/>Offers</Link><hr/>
                            <Link to="/" className=' flex gap-5 items-end  hover:bg-slate-200 p-4 font-semibold text-xl'><IoHelpBuoyOutline size={26} className=' text-gray-800'/>Help</Link><hr/>
                            <Link to="/" className=' flex gap-5 items-end  hover:bg-slate-200 p-4 font-semibold text-xl'><FaRegUserCircle size={26} className=' text-gray-800'/>SignUp or SignIn</Link><hr/>
                        </div>
                    </nav>
                </div>
            )
        }
    </div>
  )
}

export default Navbar