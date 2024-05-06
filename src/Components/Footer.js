import React from 'react'
import {  FaGooglePlay, FaMobileAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <div className='w-full flex  flex-wrap-reverse lg:px-24 px-2 border-t border-t-gray-300 mt-8'>
        <div className=' w-full md:w-2/4 gap-5 md:gap-0 flex justify-between flex-col md:flex-row py-7'>
          <div>
            <h1 className=' font-medium text-xl text-center md:text-start'> Get to Know Us</h1>
            <ul className='my-8'>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>About Us</li>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>Careers</li>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>Investors</li>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>Company Blog</li>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>Engineeing Blog</li>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>Merchant Blog</li>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>Gift Cards</li>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>Package Pickup</li>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>Promotions</li>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>Dasher Central</li>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>LinkedLn</li>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>Glassdoor</li>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>Accessibility</li>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>Newsroom</li>
            </ul>
          </div>
          <div>
            <h1 className=' font-medium text-xl text-center md:text-start'> Let Us Help You</h1>
            <ul className='my-6 '>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>Account Details</li>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>Order History</li>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>Help</li>
            </ul>
          </div>
          <div>
            <h1 className=' font-medium text-xl text-center md:text-start'> Doing Business</h1>
            <ul className='my-6 '>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>Become a Dasher</li>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>List Your Business</li>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>Get Dashers for Deliveries</li>
              <li className=' text-gray-500 text-center md:text-start my-2 cursor-pointer text-base transition-all duration-300 hover:text-black hover:underline'>Get DoorDash for Business</li>
            </ul>
          </div>
        </div>
        <div className=' w-full md:w-2/4 font-medium flex flex-col gap-3 items-center md:items-end py-7'>
          <div className=' text-white bg-gray-600 rounded-lg flex items-center w-56 p-2'>
            <FaMobileAlt size={35}/> <div className=' flex flex-col justify-center'><span className=' relative top-2'>Available on</span><span className=' text-[1.5rem] '>App Store</span></div>
          </div>
          <div className=' text-white bg-gray-600 rounded-lg flex items-center w-56 p-2'>
            <FaGooglePlay size={35}/> <div className=' flex flex-col justify-center'><span className=' relative top-2'>Available on</span><span className=' text-[1.5rem]'>Google Store</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer