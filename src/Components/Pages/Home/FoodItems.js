import React from 'react';
import { FaDollarSign, FaStar } from 'react-icons/fa';
import fooditems from './datas/Food-data';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AddItemsCar} from '../../Redux-Data/Reducer'
import { useDispatch, useSelector} from 'react-redux';
import FoodsSlider from './Layout/FoodsSlider';
const FoodItems = () => {
  const{FilterButton} =useSelector((state)=>state.reducerAction);
  const{tempfoodMenu}=useSelector((state)=>state.reducerAction);
  const dispatch=useDispatch();
  const addOncart=(fooditem)=>{
    const Foodlist={
      id:fooditem.id,
      Image:fooditem.Image,
      Name:fooditem.Name,
      KeyName:fooditem.KeyName,
      Price:fooditem.Price,
      Deliveryfees:fooditem.Deliveryfees,
      Minutes:fooditem.minutes,
      InitialPrice:fooditem.InitialPrice,
      Quantity:1,
    }
    dispatch(AddItemsCar(Foodlist));
  }
  const Delivery=fooditems.filter(fooditem=>fooditem.Deliveryfees==1);
  const QuickDelivery=fooditems.filter(fooditem=>fooditem.minutes<=30);
  const BurgerFoods=fooditems.filter(fooditem=>fooditem.keyName==="Burger");
  const SandwichFoods=fooditems.filter(fooditem=>fooditem.keyName==="Sandwich");
  const Salads=fooditems.filter(fooditem=>fooditem.keyName==="Salad");
  const Desserts=fooditems.filter(fooditem=>fooditem.keyName==="Dessert");
  return (
    <div>
      {
        FilterButton?
      <div className='lg:px-24 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {tempfoodMenu.map((fooditem) => (
          <div key={fooditem.id} className='rounded-xl p-1 shadow-black hover:shadow-xl cursor-pointer'>
            <img src={fooditem.Image} alt="FoodMenu" className='rounded-xl h-60  w-full' />
            <div className='grid grid-cols-[1fr,auto]'>
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
                <button onClick={()=>{addOncart(fooditem)}} className="bg-primary hover:opacity-75 text-white font-semibold py-1 px-5 rounded-full text-xl">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
        <ToastContainer />
        <div className={`${tempfoodMenu.length === 0 ? "flex" : "hidden"} min-h-[30rem] justify-center items-center text-5xl text-gray-400 font-extralight`}>
          Filtered Item not found...
        </div>
      </div>:
       <div>
       <FoodsSlider title="Under $1 Delivery Fees" filtered={Delivery}/>
       <FoodsSlider title="Quick Deliveries" filtered={QuickDelivery}/>
       <FoodsSlider title="Burgers" filtered={BurgerFoods}/>
       <FoodsSlider title="Sandwichs" filtered={SandwichFoods}/>
       <FoodsSlider title="Salads" filtered={Salads}/>
       <FoodsSlider title="Dessets" filtered={Desserts}/>
   </div>
   
      }
      
      
    </div>
  )
}

export default FoodItems;
