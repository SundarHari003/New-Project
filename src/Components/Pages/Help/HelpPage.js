import React from 'react'
import image1 from '../../../assests/help/Customer_new.svg'
import image2 from '../../../assests/help/Dasher_new.svg'
import image3 from '../../../assests/help/Merchant_new.svg'
const HelpPage = () => {
  return (
    <div >
        <div className=' py-16 px-36'>
            <h1 className=' text-4xl'>Welcome to DoorDash Support</h1>
            <h3 className='text-lg text-gray-600'>What can we help with today?</h3>  
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1 justify-items-center lg:gap-0 gap-10 px-24'>
            <div>
                <div className='  shadow shadow-gray-400 w-[20rem] h-[20rem] py-20 flex justify-center  rounded-xl'>
                    <img src={image1} alt="Customer" className=' object-cover'/>
                </div>
                <h3 className=' text-center text-xl py-10'>Customer Support</h3>
            </div>
            <div>
                <div className=' shadow shadow-gray-400 w-[20rem] h-[20rem] py-20 flex justify-center  rounded-xl'>
                    <img src={image2} alt="Customer" className=' object-cover'/>
                </div>
                <h3 className=' text-center text-xl py-10'>Dash Support</h3>
            </div>
            <div>
                <div className=' shadow shadow-gray-400 w-[20rem] h-[20rem] py-20 flex justify-center  rounded-xl'>
                    <img src={image3} alt="Customer" className=' object-cover'/>
                </div>
                <h3 className=' text-center text-xl py-10'>Merchant Support</h3>
            </div>
        </div>
    </div>
  )
}

export default HelpPage