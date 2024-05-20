import React, { useState,useRef,useEffect } from 'react'
import { IoHelpBuoyOutline, IoMenuOutline, IoSearchOutline } from 'react-icons/io5'
import { RiArrowDropDownLine} from 'react-icons/ri'
import { HiShoppingCart } from 'react-icons/hi'
import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai'
import Doordash from '../assests/icons/Doordash.png'
import  {  FaXmark } from 'react-icons/fa6'
import {Link} from 'react-router-dom'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { BsBagCheck } from 'react-icons/bs'
import { FaApple, FaFacebook, FaMicrosoft, FaRegUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import google from '../assests/search.png'
const Navbar = () => {
    const{foodcart}=useSelector((state)=>state.reducerAction);
    const[MenuIcon,setMenuIcon]=useState(false);
    const[OpenLogin,setOpenLogin]=useState(false);
    const[signing,setsigning]=useState(false);
   
    
    const OpenMenu=()=>{
        setMenuIcon(!MenuIcon);}
    const sign=(value)=>{
        value?setsigning(false):setsigning(true);
        setOpenLogin(!OpenLogin);
        setMenuIcon(false)
    }
    const signs=(value)=>{
        value?setsigning(false):setsigning(true);
        setMenuIcon(false)
    }
    const user="UserName";
    const[field,setfield]=useState(false);
    const[field1,setfield1]=useState(true);

    const check=(e)=>{
        if(e.target.value.length>0)
            {
                setfield(true);
            }
       else
       {
        setfield(false)
       }

    }
    const checking=(e)=>{
        if(e.target.value.length>0)
            {
                setfield1(false);
            }
       else
       {
        setfield1(true)
       }
    }
    
    const dropdownRef =useRef(null);
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpenLogin(false);
        }
      };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
  return (
    <div className=' w-full flex flex-col items-center sticky top-0 bg-white z-[999]'>
        <nav className=' md:grid grid-cols-[auto,1fr] w-full lg:px-24 py-2  px-2 border-b border-b-gray-300 hidden'>
            <div className=' flex items-center gap-3' >
                <IoMenuOutline size={26} className=' cursor-pointer' onClick={OpenMenu}/>
                <Link to='/Home' className=' flex items-center'>
                    <img src={Doordash} alt="webicon" className=' h-14'/>
                    <h2 className=' tracking-widest text-primary text-xl font-bold cursor-pointer hidden lg:block '>DOORDASH</h2>
                </Link>
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
                    <Link to='/FoodCart' className=' font-semibold flex items-center bg-primary rounded-full gap-3 text-white px-3 py-1 cursor-pointer'>
                        <HiShoppingCart size={25}/><span className=' text-base'>{foodcart.length}</span>
                    </Link>
                    <button className=' font-semibold mx-3 cursor-pointer' onClick={()=>sign(0)}>SignIn</button>
                    <button className=' font-semibold bg-gray-300 rounded-full px-3 py-2 cursor-pointer' onClick={()=>sign(1)}>SignUp</button>
                </div>
            </div>
        </nav>
        <nav className=' md:hidden flex justify-between w-full px-2 py-3 border-b border-b-gray-300'>
            <div className=' flex gap-3 items-center ps-5'>
                <IoMenuOutline size={26} className=' cursor-pointer' onClick={OpenMenu}/>
               <Link to='/FoodCart'><AiOutlineShoppingCart size={26} className=' cursor-pointer'/></Link>
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
            (MenuIcon&&
                <div className={ ` bg-transparent fixed top-0 w-full z-20 bg-slate-500 transparent-back min-h-screen`} onClick={(event)=>handleClickOutside(event)} ref={dropdownRef}>
                    <nav className={` w-3/4 sm:w-2/4  md:w-2/5 lg:w-1/4 MenuNav  relative duration-300 transition-all  bg-white shadow shadow-slate-700 min-h-screen `}>
                        <div className=' px-4 py-6 '> 
                            <FaXmark size={26} onClick={OpenMenu} className=' cursor-pointer'/>
                        </div>
                        <div>
                            <Link to="/" className=' flex gap-5 items-end  hover:bg-slate-200 p-4 font-semibold text-xl'><AiOutlineHome size={26} className=' text-gray-800' onClick={OpenMenu}/>Home</Link><hr/>
                            <Link to="/" className=' flex gap-5 items-end  hover:bg-slate-200 p-4 font-semibold text-xl' onClick={OpenMenu}><BsBagCheck size={26} className=' text-gray-800' />Pickup</Link><hr/>
                            <Link to="/" className=' flex gap-5 items-end  hover:bg-slate-200 p-4 font-semibold text-xl' onClick={OpenMenu}><MdOutlineLocalOffer size={26} className=' text-gray-800 rotate-90'/>Offers</Link><hr/>
                            <Link to="/Help" className=' flex gap-5 items-end  hover:bg-slate-200 p-4 font-semibold text-xl' onClick={OpenMenu}><IoHelpBuoyOutline size={26} className=' text-gray-800'/>Help</Link><hr/>
                            <div className=' flex gap-5 items-end  hover:bg-slate-200 p-4 font-semibold text-xl cursor-pointer'onClick={sign}><FaRegUserCircle size={26} className=' text-gray-800' />SignUp or SignIn</div><hr/>
                        </div>
                    </nav>
                </div>
            )
        }
        {
            (OpenLogin&&
                <div className=' min-h-screen bg-black bg-opacity-50 absolute flex justify-center p-8 top-0 w-full z-[9999]' onClick={(event)=>{handleClickOutside(event)}} ref={dropdownRef}>
                    <div className=' w-full  md:w-3/4 xl:w-2/4 sign-blur overflow-auto'>
                        <div className=' p-5'>
                            <FaXmark size={32} onClick={sign} className=' cursor-pointer'/>
                        </div>
                        <div className=' flex'>
                            <h1 className={` text-3xl font-semibold  ms-5 ps-1 text-primary py-3 cursor-pointer px-10 w-2/4 text-center ${signing?"new-glass-design":" "} rounded-2xl`} onClick={()=>signs(0)}>Sign In</h1>
                            <h1 className={` text-3xl font-semibold  me-5 ps-1 text-primary py-3 cursor-pointer px-10 w-2/4 text-center ${signing?"":"new-glass-design"} rounded-2xl`} onClick={()=>signs(1)}>Sign Up</h1>
                        </div>
                        {
                            signing?
                            <div className=' new-glass-design mx-5 rounded-lg'>
                            <form className=' flex items-center justify-center flex-col w-full  h-full px-10 '>
                                <div className='form-control'>
                                    <input type="text" name="Name" id="Name" onChange={(e)=>{check(e)}}/>
                                    <label htmlFor="Name" id="UserName" className='user'>
                                        {
                                            user.split('').map((letter,i)=>(
                                                <span style={{transitionDelay:`${i*50}ms` }} className={`${field?" translate-y-[-20px] text-primary": " translate-y-0 text-white"}`}>{letter}</span>
                                            ))
                                        }
                                    </label>
                                </div>
                                <div className='form-control'>
                                    <input type="password" name="Name" id="pass" onChange={(e)=>checking(e)}/>
                                    <label htmlFor="pass" id="password" className='user'>
                                        {
                                            "Password".split('').map((letter,i)=>(
                                                <span style={{transitionDelay:`${i*50}ms`}} className={`${field1?" translate-y-0 text-white": " translate-y-[-20px] text-primary"} `}>{letter}</span>
                                            ))
                                        }
                                    </label>
                                </div>
                                <button type="submit" className=' w-full text-2xl font-semibold bg-primary my-5 py-3 rounded-xl text-white hover:opacity-75 transition-all duration-300'>Sign In</button>
                            </form>
                            <div className=' flex items-center justify-center gap-1'>
                                <span className=' h-1 w-1/4 bg-white'></span>
                                <span className=' text-white text-base'>or continue with other ways</span>
                                <span className=' h-1 w-1/4 bg-white'></span>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 px-10 py-5'>
                                <div className=' flex items-center justify-center gap-1 bg-blue-600 rounded-lg p-2  text-white'>
                                    <img src={google} alt="google"/> <span className=' text-lg'>continue with Google</span>
                                </div>
                                <div className=' flex items-center justify-center gap-1 bg-blue-800 rounded-lg p-2 text-white'>
                                    <FaFacebook size={20}/> <span className=' text-lg'>continue with Facebook</span>
                                </div>
                                <div className=' flex items-center justify-center gap-1 bg-black rounded-lg p-2  text-white'>
                                    <FaApple size={20}/> <span className=' text-lg'>continue with Apple &nbsp;</span>
                                </div>
                                <div className=' flex items-center justify-center gap-1 bg-blue-500 rounded-lg p-2 text-white'>
                                    <FaMicrosoft size={20}/> <span className=' text-lg'>continue with OutLook</span>
                                </div>
                            </div>
                            <div className=' text-center text-white py-2'>
                                <span className=' text-lg'>Don't have a account ? <a href="#" className=' text-blue-700'>Sign Up</a></span>
                            </div>
                        </div>
                        :
                        <div className=' mx-5 rounded-lg  new-glass-design'>
                            <form className=' grid grid-cols-2 gap-8 w-full  h-full px-10 py-5'>
                               <div className=' relative pt-8 w-full grid col-span-2 md:col-span-1'>
                                <input type="text" name="firstname" id='firstname' required className=' bg-transparent border-b-2 border-b-white w-full focus:outline-none' />
                                <label for="firstName" className={` absolute top-0 left-0 text-lg text-white `}>
                                    {
                                        "First Name".split('').map((letter,i)=>(
                                                <span style={{transitionDelay:`${i*50}ms` }} className=' text-xl' >{letter}</span>
                                            ))
                                        }
                                </label>
                               </div>
                               <div className=' relative pt-0 md:pt-8 w-full grid col-span-2 md:col-span-1'>
                                <input type="text" name="Lastname" id='lastname' required className=' bg-transparent border-b-2 border-b-white w-full focus:outline-none'/>
                                <label htmlFor="lastName" className=' absolute top-0 left-0 text-lg text-white '>
                                    {
                                        "Last Name".split('').map((letter,i)=>(
                                                <span style={{transitionDelay:`${i*50}ms` }} className=' relative text-xl ' >{letter}</span>
                                            ))
                                        }
                                </label>
                               </div>
                               <div className=' relative grid col-span-2'>
                                <input type="email" name="name" required className=' bg-transparent border-b-2 border-b-white w-full focus:outline-none' />
                                <label htmlFor="firstName" className=' absolute -top-7 left-0 text-lg text-white'>
                                    {
                                        "Email".split('').map((letter,i)=>(
                                                <span style={{transitionDelay:`${i*50}ms` }} className={`relative  text-[1.25rem] text-white`}>{letter}</span>
                                            ))
                                        }
                                </label>
                               </div>
                               <div className=' grid col-span-2 md:col-span-1 w-full'>
                                <div className=' relative flex gap-3 w-full'>
                                    <select className=' bg-transparent border-2 border-white rounded-lg text-white focus:outline-none'>
                                        <option selected devalue="india" className='bg-black bg-opacity-10 border-2 text-center'>+91</option>
                                        <option value="USA" className='bg-black bg-opacity-10 border-2 text-center'>+1</option>
                                        <option value="UK" className='bg-black bg-opacity-10 border-2 text-center'>+44</option>
                                        <option value="UAE" className='bg-black bg-opacity-10 border-2 text-center'>+971</option>
                                        <option value="Korea" className='bg-black bg-opacity-10 border-2 text-center'>+82</option>
                                    </select>
                                    <input type="number" name="name" id='number' required className=' bg-transparent border-b-2 border-b-white w-full' />
                                    <label for="number" className=' absolute -top-7 left-[4.4rem] text-lg text-white'>
                                        {
                                            "Phone Number".split('').map((letter,i)=>(
                                                    <span style={{transitionDelay:`${i*50}ms` }} className=' text-[1.25rem] text-white'>{letter}</span>
                                                ))
                                            }
                                    </label>
                                </div>
                               </div>
                               <div className=' grid col-span-2 md:col-span-1 w-full'>
                                    <div className=' relative flex gap-3 w-full'>
                                    <select className='bg-transparent border-b-2 border-b-white text-white focus:outline-none text-xl w-full text-center'>
                                        <option selected disabled className='bg-black bg-opacity-10 border-2 text-center'>State</option>
                                        <option value="Tamil Nadu" className='bg-black bg-opacity-10 border-2 text-center'>Tamil Nadu</option>
                                        <option value="Kerala" className='bg-black bg-opacity-10 border-2 text-center'>Kerala</option>
                                        <option value="Bangalore" className='bg-black bg-opacity-10 border-2 text-center'>Bangalore</option>
                                        <option value="Andra Pradesh" className='bg-black bg-opacity-10 border-2 text-center'>Andra Pradesh</option>
                                    </select>

                                        </div>
                               </div>
                                <div className=' relative grid col-span-2'>
                                    <input type="Password" name="name" id='number' required className=' bg-transparent border-b-2 border-b-white w-full focus:outline-none'/>
                                    <label for="number" className=' absolute -top-7 left-0 text-lg text-white'>
                                        {
                                            "Create Password".split('').map((letter,i)=>(
                                                    <span style={{transitionDelay:`${i*50}ms` }} className=' text-[1.25rem] text-white'>{letter}</span>
                                                ))
                                            }
                                    </label>
                                </div>
                                <div className=' relative grid col-span-2'>
                                    <input type="Password" name="name" id='number' required className=' bg-transparent border-b-2 border-b-white w-full focus:outline-none' />
                                    <label for="number" className=' absolute -top-7 left-0 text-lg text-white'>
                                        {
                                            "Current Password".split('').map((letter,i)=>(
                                                    <span style={{transitionDelay:`${i*50}ms` }} className=' text-[1.25rem] text-white'>{letter}</span>
                                                ))
                                            }
                                    </label>
                                </div>
                                <div className=' gird col-span-2'>
                                <button type="submit" className=' w-full text-2xl font-semibold bg-primary  py-3 rounded-xl text-white hover:opacity-75 transition-all duration-300'>Sign Up</button>
                                </div>
                                <div className=' grid col-span-2 justify-items-center'>
                                    <span className=' text-lg text-white flex items-center gap-1'>Already have account ? <a href='#' className=' text-blue-700'>SignIn</a> </span>
                                </div>
                            </form>
                            
                        </div>
                        }
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Navbar