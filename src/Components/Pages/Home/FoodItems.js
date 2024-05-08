import React, { useState } from 'react';
import { FaDollarSign, FaStar } from 'react-icons/fa';
import fooditems from './datas/Food-data';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FoodItems = () => {
  const [showToast, setShowToast] = useState(false);

  
  const notify=()=>{toast.success("Your Food items added on Cart...", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })};
  return (
    <div className='lg:px-24 px-2 grid grid-cols-3 gap-6'>
      {fooditems.map((fooditem) => (
        <div key={fooditem.id} className='rounded-xl p-1 shadow-black hover:shadow-xl cursor-pointer'>
          <img src={fooditem.Image} alt="FoodMenu" className='rounded-xl h-60 pb-2' />
          <div className='grid grid-cols-2'>
            <div className='flex flex-col'>
              <h4 className='text-lg font-semibold'>{fooditem.Name}</h4>
              <div className='text-gray-500 flex items-center gap-2 font-medium'>
                <span className='flex items-center gap-1'>{fooditem.Rating} <FaStar /></span>
                <span className='w-1 h-1 bg-gray-500 rounded-full'></span>
                <span>{fooditem.miles}mi</span>
                <span className='w-1 h-1 bg-gray-500 rounded-full'></span>
                <span>{fooditem.minutes}min</span>
              </div>
              <div className='text-gray-500 font-medium'>
                <span className='flex items-center gap-1'><FaDollarSign />{fooditem.Deliveryfees} delivery fees</span>
              </div>
            </div>
            <div className='flex justify-end items-center mx-5'>
              <button onClick={notify} className="bg-primary hover:opacity-75 text-white font-semibold py-1 px-5 rounded-full text-xl">
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Toast Container */}
      <ToastContainer />
      
      
      {/* Message when no items are found */}
      <div className={`${fooditems.length === 0 ? "block" : "hidden"} w-[50rem] justify-center items-center text-5xl text-gray-400 font-extralight`}>
        Filtered Item not found...
      </div>
    </div>
  )
}

export default FoodItems;
