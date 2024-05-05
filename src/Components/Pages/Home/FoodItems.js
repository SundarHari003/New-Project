import React from 'react'
import { FaDollarSign, FaStar } from 'react-icons/fa'

import fooditems from './datas/Food-data'

const FoodItems = () => {
  return (
    <div className=' lg:px-24 px-2 grid grid-cols-3 gap-6'>
      {
        fooditems.map((fooditem)=>(
        <div className=' rounded-xl p-1 flex flex-col gap-1 shadow-black hover:shadow-xl cursor-pointer'>
            <img src={fooditem.Image} alt="FoodMenu" className=' rounded-xl h-60'/>
            <h4 className=' text-lg font-semibold'>{fooditem.Name}</h4>
            <div className=' text-gray-500 flex items-center gap-2 font-medium'>
                <span className=' flex items-center gap-1 '>{fooditem.Rating} <FaStar /></span>
                <span className=' w-1 h-1 bg-gray-500 rounded-full'></span>
                <span>{fooditem.miles}mi</span>
                <span className=' w-1 h-1 bg-gray-500 rounded-full'></span>
                <span>{fooditem.minutes}min</span>
            </div>
            <div className=' text-gray-500 font-medium'>
                <span className=' flex items-center gap-1'><FaDollarSign/>0 delivery fees, first order</span>
            </div>
        </div>
      ))
      }
    </div>
  )
}

export default FoodItems