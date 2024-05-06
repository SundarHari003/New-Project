import React from 'react'
import image1 from '../../../assests/help/Customer_new.svg'
import image2 from '../../../assests/help/Dasher_new.svg'
import image3 from '../../../assests/help/Merchant_new.svg'
const HelpPage = () => {
  return (
    <div>
        <h1 className=' text-4xl'>Welcome to DoorDash Support</h1>
        <h3 className='text-lg text-gray-600'>What can we help with today?</h3>
        <div className='grid md:grid-cols-3 grid-cols-1'>
            <div className=' border border-gray-400 shadow shadow-black w-[65%] py-20   rounded-xl'>
                <img src={image1} alt="Customer" className=' object-cover'/>
            </div>
            <div className=' border border-gray-400 shadow shadow-black w-[65%] py-20 rounded-xl'>
                <img src={image2} alt="Customer"/>
            </div>
            <div className=' border border-gray-400 shadow shadow-black w-[65%] h-5/6 py-20  rounded-xl'>
                <img src={image3} alt="Customer" className=' object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default HelpPage