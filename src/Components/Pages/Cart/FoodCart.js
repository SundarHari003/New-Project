import React from 'react'
import image from '../../../assests/Items/empty-cart.png'
const FoodCart = () => {
  return (
    <div className={` w-full min-h-[38rem]  bg-no-repeat  bg-center `} style={{backgroundImage:`url(${image})`}}>
      <h1 className=' text-center text-3xl font-semibold italic text-gray-500 py-10'>Your Food Cart is Empty...🙃</h1>
    </div>
  )
}

export default FoodCart