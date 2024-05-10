import React, { useState ,useEffect, useRef} from 'react'
import {  MdLocalOffer, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { TiStarFullOutline } from "react-icons/ti";
import { TbCurrencyDollar } from "react-icons/tb";
import Dash from '../../../assests/icons/p.png';
const Filter = () => {
    const[Fees,setFees]=useState(false);
    const[RatingOpen,setRatingOpen]=useState(false);
    const[Price,setPrice]=useState(false);
    const[DeliveryFees,setDeliveryFees]=useState(3);
    const[Rating,setRating]=useState(4.5);
    const[rest,setrest]=useState(false);
    const dropdownRef =useRef(null);
    const dropdownRef2 =useRef(null);
    const ChnageDeliveryFees=(event)=>{
        setDeliveryFees(event.target.value);
    }
    const ChangeRating=(event)=>{
        setRating(event.target.value);
    }
    const OpenFees=()=>{
        setFees(!Fees);
    }
    const OpenRating=()=>{
        setRatingOpen(!RatingOpen);
    }
    const OpenPrice=()=>{
        setPrice(!Price);
    }
    
      const resetbutton=()=>{
      
        setDeliveryFees(3);
        setRating(4.5)
        setrest(false);
        
      }
      const calltheDeliveryfees=(event)=>{
        event.preventDefault();
        setrest(true)
      }
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setFees(false);
        }
      };
      const handle2ClickOutside = (event) => {
        if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
          setRatingOpen(false);
        }
      };
      useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("mousedown", handle2ClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
          document.addEventListener("mousedown", handle2ClickOutside);
        };
      }, []);
    
  return (
        <div className='scrollable-container xl:px-24 lg:px-14 px-5  py-6 w-full flex items-center gap-3 overflow-x-auto scroll-bar sticky top-[4.5rem] bg-white z-[999]'>
            <div className='relative'>
                <div className={`text-base font-semibold flex items-center bg-gray-200 ${DeliveryFees===7?"w-[16.7rem]":"w-[15.7rem]"} px-3 py-[0.1rem]  rounded-full cursor-pointer hover:bg-gray-50 hover:text-black transition-all duration-200 `}>
                    <div className=' flex text-base items-center' >Delivery Fees: Under<TbCurrencyDollar size={17}/><span className='pt-[0.2rem]'>{(DeliveryFees===7?"5+":DeliveryFees)}</span><span className=' w-[0.04rem] h-4 me-2 ms-2 bg-slate-400'></span></div> <MdOutlineKeyboardArrowDown size={17} onClick={OpenFees}/>
                </div> 
                {
                    (
                        Fees&&
                        <div className=' md:w-auto md:h-auto md:bg-transparent md:block md:relative absolute top-0 z-50 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center px-10' onSubmit={calltheDeliveryfees} ref={dropdownRef}> 
                            <form className=' absolute px-3 pb-1 pt-5 shadow bg-white shadow-black rounded-lg md:w-[25rem] space-y-2 z-10'>
                                <h1 className=' font-semibold text-3xl'>Delivery Fees</h1>
                                <p className=' text-[1rem] text-gray-500 font-semibold'>Delivery fees vary for each restaurant based on your location and other factors.</p>
                                <div className=' text-[1rem] text-gray-500 font-semibold flex items-center'>Under <TbCurrencyDollar size={20}/><span className=' text-lg'>{(DeliveryFees===7?"5+":DeliveryFees)}</span> </div>
                                <div class="flex flex-col space-y-2 p-2 w-full relative">
                                    <input type="range" class="w-full" min="1" max="7" step="2" className=' slider cursor-pointer' defaultValue={DeliveryFees} onChange={ChnageDeliveryFees}/>
                                    <ul class="flex justify-between w-full py-5 px-[10px]">
                                        <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold"><TbCurrencyDollar size={15}/>1</span></li>
                                        <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold"><TbCurrencyDollar size={15}/>3</span></li>
                                        <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold"><TbCurrencyDollar size={15}/>5</span></li>
                                        <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold"><TbCurrencyDollar size={15}/>5+</span></li>
                                    </ul>
                                    <ul class="flex justify-between w-full py-5 px-[10px] absolute -top-[1.5rem] left-0 -z-10 cursor-pointer">
                                        <li class="flex justify-center relative w-3 h-3 bg-black rounded-full cursor-pointer"><span class="absolute flex text-base items-center font-semibold"></span></li>
                                        <li class="flex justify-center relative w-3 h-3 bg-black rounded-full cursor-pointer"><span class="absolute flex text-base items-center font-semibold"></span></li>
                                        <li class="flex justify-center relative w-3 h-3 bg-black rounded-full cursor-pointer"><span class="absolute flex text-base items-center font-semibold"></span></li>
                                        <li class="flex justify-center relative w-3 h-3 bg-black rounded-full cursor-pointer"><span class="absolute flex text-base items-center font-semibold"></span></li>
                                    </ul>
                                </div><hr/>
                                <div className=' py-3 text-lg font-semibold flex justify-end gap-4'>
                                    <button type="button" className=' px-2 py-1'onClick={OpenFees}> Cancel</button>
                                    <button type='submit' className=' bg-primary px-5 py-2 rounded-full text-white' >View Result</button>
                                </div>
                            </form>
                            <div>
                            </div>    
                        </div>
                    )
                } 
            </div>
            <div className={`text-base font-semibold flex items-center bg-gray-200 w-fit px-3 py-[0.2rem]  rounded-full cursor-pointer hover:bg-gray-50 hover:text-black transition-all duration-200`}>
                <MdLocalOffer size={17} className=' rotate-90'/> <span className=' text-base'>Offers</span>
            </div>
            <div className={`py-[0.2rem] font-semibold flex items-center w-fit px-3 rounded-full cursor-pointer hover:bg-gray-50 transition-all duration-200 hover:text-black bg-gray-200`} >
                <span className=' text-base'>Pickup</span>
            </div>
            <div className=' relative'>
                <div className={` text-base font-semibold flex items-center py-[0.1rem] hover:text-black w-fit px-3 rounded-full cursor-pointer hover:bg-gray-50 transition-all duration-200 gap-1 bg-gray-200`} >
                    Over<span className='pt-[0.2rem]'>{Rating}</span><TiStarFullOutline size={17}/><span className=' w-[0.04rem] h-4 me-2 bg-slate-400'></span> <MdOutlineKeyboardArrowDown size={17} onClick={OpenRating}/>
                </div>
                {
                    (
                        RatingOpen&&
                        <form className=' fixed px-3 pt-5 shadow bg-white shadow-black rounded-lg w-[25rem] space-y-2 z-10 'onSubmit={calltheDeliveryfees} ref={dropdownRef2} >
                            <h1 className=' font-semibold text-3xl'>Rating</h1>
                            <div className=' text-[1rem] text-gray-500 font-semibold flex items-center'>Over <TbCurrencyDollar size={20}/><span className=' text-lg'>{Rating}</span> </div>
                            <div class="flex flex-col space-y-2 p-2 w-full relative">
                                <input type="range" class="w-full" min="3" max="5" step="0.5" direction="rtl" className=' slider cursor-pointer' defaultValue={Rating} onChange={ChangeRating}/>
                                <ul class="flex justify-between w-full py-5 px-[10px]">
                                    <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold">3</span></li>
                                    <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold">3.5</span></li>
                                    <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold">4</span></li>
                                    <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold">4.5</span></li>
                                    <li class="flex justify-center relative"><span class="absolute flex text-base items-center font-semibold">5</span></li>
                                </ul>
                                <ul class="flex justify-between w-full py-5 px-[10px] absolute -top-[1.5rem] left-0 -z-10 cursor-pointer">
                                    <li class="flex justify-center relative w-3 h-3 bg-black rounded-full cursor-pointer"><span class="absolute flex text-base items-center font-semibold"></span></li>
                                    <li class="flex justify-center relative w-3 h-3 bg-black rounded-full cursor-pointer"><span class="absolute flex text-base items-center font-semibold"></span></li>
                                    <li class="flex justify-center relative w-3 h-3 bg-black rounded-full cursor-pointer"><span class="absolute flex text-base items-center font-semibold"></span></li>
                                    <li class="flex justify-center relative w-3 h-3 bg-black rounded-full cursor-pointer"><span class="absolute flex text-base items-center font-semibold"></span></li>
                                    <li class="flex justify-center relative w-3 h-3 bg-black rounded-full cursor-pointer"><span class="absolute flex text-base items-center font-semibold"></span></li>
                                </ul>
                            </div><hr/>
                            <div className=' py-3 text-lg font-semibold flex justify-end gap-4'>
                                <button type="button" className=' px-2 py-1'onClick={OpenRating}> Cancel</button>
                                <button type='submit' className=' bg-primary px-5 py-2 rounded-full text-white'>View Result</button>
                            </div>
                        </form>
                    )
                } 
            </div>
            <div className={`font-semibold flex items-center min-w-[8.3rem] px-3  py-[0.2rem] rounded-full cursor-pointer hover:bg-gray-50 transition-all duration-200 bg-gray-200 hover:text-black`} >
                <span className=' text-base'>Under 30 min</span>
            </div>
            <div>
                <div className={` font-semibold flex items-center w-fit px-3 py-[0.2rem] rounded-full cursor-pointer hover:bg-gray-50 transition-all duration-200 gap-2 bg-gray-200 hover:text-black`} >
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
            <div className={`font-semibold flex items-center min-w-[8.9rem] px-3 py-[0.2rem] rounded-full cursor-pointer hover:bg-gray-50 transition-all duration-200 gap-2 bg-gray-200 hover:text-black `}>
                <img src={Dash} alt="icons" width={25}/>
                <span className=' text-base'>DashPass</span>
            </div>
            <div className={`${rest?"block":"hidden"} flex justify-end py-2 lg:px-24 px-2`}>
                <button className='w-fit py-1 px-2 text-base font-medium bg-gray-300 rounded-full' onClick={resetbutton}>rest</button>
            </div>
        </div>
        
    
  )
}

export default Filter