import React, { useState } from 'react'
import {  MdLocalOffer, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { TiStarFullOutline } from "react-icons/ti";
import { TbCurrencyDollar } from "react-icons/tb";
import Dash from '../../../assests/icons/p.png';
const Filter = () => {
    const[className,setClassName]=useState({});
    const[Fees,setFees]=useState(false);
    const[Rating,setRating]=useState(false);
    const[Price,setPrice]=useState(false);
    const OpenFees=()=>{
        setFees(!Fees);
    }
    const OpenRating=()=>{
        setRating(!Rating);
    }
    const OpenPrice=()=>{
        setPrice(!Price);
    }
    const Active = (id) => {
        setClassName(prevState => ({
          ...prevState,
          [id]: !prevState[id]
        }));
      };
  return (
    <div className=' xl:px-24 lg:px-14 px-5  py-6 w-full flex items-center gap-3 overflow-x-auto scroll-bar sticky top-[4.5rem] bg-white'>
        <div>
            <div className={`text-base font-semibold flex items-center ${className[1]?"bg-black text-white":"bg-gray-200"} w-[15.7rem] px-3 py-[0.1rem]  rounded-full cursor-pointer hover:bg-gray-50 hover:text-black transition-all duration-200`}>
                <div className=' flex text-base items-center' onClick={()=>{Active(1)}}>Delivery Fees: Under<TbCurrencyDollar size={17}/><span className='pt-[0.2rem]'>0</span><span className=' w-[0.04rem] h-4 me-2 ms-2 bg-slate-400'></span></div> <MdOutlineKeyboardArrowDown size={17} onClick={OpenFees}/>
            </div> 
            {
                (
                    Fees&&
                    <div className=' md:w-auto md:h-auto md:bg-transparent md:block md:relative overflow-hidden absolute top-0 z-50 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center px-10'> 
                        <div className=' fixed px-3 py-5  shadow bg-white shadow-black rounded-lg md:w-[25rem] space-y-2 z-10'>
                            <h1 className=' font-semibold text-3xl'>Delivery Fees</h1>
                            <p className=' text-[1rem] text-gray-500 font-semibold'>Delivery fees vary for each restaurant based on your location and other factors.</p>
                            <div className=' text-[1rem] text-gray-500 font-semibold flex items-center'>Under <TbCurrencyDollar size={20}/><span className=' text-lg'>0</span> </div>
                            <div class="flex flex-col space-y-2 p-2 w-full">
                                <input type="range" class="w-full" min="1" max="4" step="1" className=' Slider-dumb'/>
                                <ul class="flex justify-between w-full py-5 px-[10px]">
                                    <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold"><TbCurrencyDollar size={15}/>1</span></li>
                                    <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold"><TbCurrencyDollar size={15}/>3</span></li>
                                    <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold"><TbCurrencyDollar size={15}/>5</span></li>
                                    <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold"><TbCurrencyDollar size={15}/>5+</span></li>
                                </ul>
                            </div><hr/>
                            <div className=' py-3 text-lg font-semibold flex justify-end gap-4'>
                                <button type="button" className=' px-2 py-1'> Cancel</button>
                                <button type='button' className=' bg-primary px-5 py-2 rounded-full text-white'>View Result</button>
                            </div>
                        </div>   
                    </div>
                )
            } 
        </div>
        <div className={`text-base font-semibold flex items-center ${className[2]?"bg-black text-white":"bg-gray-200"} w-fit px-3 py-[0.2rem]  rounded-full cursor-pointer hover:bg-gray-50 hover:text-black transition-all duration-200`} onClick={()=>{Active(2)}}>
            <MdLocalOffer size={17} className=' rotate-90'/> <span className=' text-base'>Offers</span>
        </div>
        <div className={`py-[0.2rem] font-semibold flex items-center w-fit px-3 rounded-full cursor-pointer hover:bg-gray-50 transition-all duration-200 hover:text-black ${className[3]?"bg-black text-white":"bg-gray-200"}`} onClick={()=>{Active(3)}}>
            <span className=' text-base'>Pickup</span>
        </div>
        <div>
            <div className={` text-base font-semibold flex items-center py-[0.1rem] hover:text-black w-fit px-3 rounded-full cursor-pointer hover:bg-gray-50 transition-all duration-200 gap-1 ${className[4]?"bg-black text-white":"bg-gray-200"}`} onClick={()=>{Active(4)}}>
                Over<span className='pt-[0.2rem]'>4.5</span><TiStarFullOutline size={17}/><span className=' w-[0.04rem] h-4 me-2 bg-slate-400'></span> <MdOutlineKeyboardArrowDown size={17} onClick={OpenRating}/>
            </div>
            {
                (
                    Rating&&
                    <div className=' fixed px-3 py-5 shadow bg-white shadow-black rounded-lg w-[25rem] space-y-2 z-10'>
                        <h1 className=' font-semibold text-3xl'>Delivery Fees</h1>
                        <p className=' text-[1rem] text-gray-500 font-semibold'>Delivery fees vary for each restaurant based on your location and other factors.</p>
                        <div className=' text-[1rem] text-gray-500 font-semibold flex items-center'>Under <TbCurrencyDollar size={20}/><span className=' text-lg'>0</span> </div>
                        <div class="flex flex-col space-y-2 p-2 w-full">
                            <input type="range" class="w-full" min="1" max="4" step="1" className=' Slider-dumb'/>
                            <ul class="flex justify-between w-full py-5 px-[10px]">
                                <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold"><TbCurrencyDollar size={15}/>1</span></li>
                                <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold"><TbCurrencyDollar size={15}/>3</span></li>
                                <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold"><TbCurrencyDollar size={15}/>5</span></li>
                                <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold"><TbCurrencyDollar size={15}/>5+</span></li>
                            </ul>
                        </div><hr/>
                        <div className=' py-3 text-lg font-semibold flex justify-end gap-4'>
                            <button type="button" className=' px-2 py-1'> Cancel</button>
                            <button type='button' className=' bg-primary px-5 py-2 rounded-full text-white'>View Result</button>
                        </div>
                    </div>
                )
            } 
        </div>
        <div className={`font-semibold flex items-center min-w-[8.3rem] px-3  py-[0.2rem] rounded-full cursor-pointer hover:bg-gray-50 transition-all duration-200 ${className[5]?"bg-black text-white":"bg-gray-200"} hover:text-black`} onClick={()=>{Active(5)}}>
            <span className=' text-base'>Under 30 min</span>
        </div>
        <div>
            <div className={` font-semibold flex items-center w-fit px-3 py-[0.2rem] rounded-full cursor-pointer hover:bg-gray-50 transition-all duration-200 gap-2 ${className[6]?"bg-black text-white":"bg-gray-200"} hover:text-black`} onClick={()=>{Active(6)}}>
                <span className=' text-base'>Price</span> <MdOutlineKeyboardArrowDown size={17} onClick={OpenPrice}/>
            </div>
            {
                (
                    Price&&
                    <div className=' fixed px-3 py-5 shadow bg-white shadow-black rounded-lg w-[25rem] space-y-2 z-10'>
                        <h1 className=' font-semibold text-3xl'>Delivery Fees</h1>
                        <p className=' text-[1rem] text-gray-500 font-semibold'>Delivery fees vary for each restaurant based on your location and other factors.</p>
                        <div className=' text-[1rem] text-gray-500 font-semibold flex items-center'>Under <TbCurrencyDollar size={20}/><span className=' text-lg'>0</span> </div>
                        <div class="flex flex-col space-y-2 p-2 w-full">
                            <input type="range" class="w-full" min="1" max="4" step="1" className=' Slider-dumb'/>
                            <ul class="flex justify-between w-full py-5 px-[10px]">
                                <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold"><TbCurrencyDollar size={15}/>1</span></li>
                                <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold"><TbCurrencyDollar size={15}/>3</span></li>
                                <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold"><TbCurrencyDollar size={15}/>5</span></li>
                                <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold"><TbCurrencyDollar size={15}/>5+</span></li>
                            </ul>
                        </div><hr/>
                        <div className=' py-3 text-lg font-semibold flex justify-end gap-4'>
                            <button type="button" className=' px-2 py-1'> Cancel</button>
                            <button type='button' className=' bg-primary px-5 py-2 rounded-full text-white'>View Result</button>
                        </div>
                    </div>
                )
            } 
        </div>
        <div className={`font-semibold flex items-center min-w-[8.9rem] px-3 py-[0.2rem] rounded-full cursor-pointer hover:bg-gray-50 transition-all duration-200 gap-2 ${className[7]?"bg-black text-white":"bg-gray-200"} hover:text-black `}onClick={()=>{Active(7)}}>
            <img src={Dash} alt="icons" width={25}/>
            <span className=' text-base'>DashPass</span>
        </div>

    </div>
  )
}

export default Filter