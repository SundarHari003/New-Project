
import { FaDollarSign, FaStar } from 'react-icons/fa';
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { ToastContainer } from 'react-toastify';
import {AddItemsCar} from '../../../Redux-Data/Reducer'
import { useDispatch} from 'react-redux';
const FoodsSlider = ({title,filtered}) => {
const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);
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
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.on('slideChange', () => {
        setIsBeginning(swiperRef.current.swiper.isBeginning);
        setIsEnd(swiperRef.current.swiper.isEnd);
      });
    }
  }, []);

  return (
    <div className=' relative'>
        <div className=' flex justify-between lg:px-24 px-6 py-5'>
          <h1 className=' text-2xl sm:text-3xl font-semibold'>{title}</h1>
          <div className=' flex gap-3'>
            <button onClick={goPrev} disabled={isBeginning} className={` p-1 relative rounded-full shadow shadow-black bg-white hover:bg-gray-200 transition-all duration-300 ${isBeginning ? 'opacity-50 cursor-not-allowed' : ''}`}><MdKeyboardArrowLeft size={30}/></button>
            <button onClick={goNext} disabled={isEnd} className={`p-1 relative rounded-full shadow shadow-black hover:bg-gray-200 transition-all duration-300 bg-white ${isEnd ? 'opacity-50 cursor-not-allowed' : ''}`}><MdKeyboardArrowRight size={30}/></button>
          </div>
        </div>
      <div className='lg:px-24 px-10'>
        <Swiper
          ref={swiperRef}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            750: {
              slidesPerView: 2,
            },
            1100: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 14
            }
          }}
          className="mySwiper "
          navigation={false}
        >
          {filtered.map((fooditem) => (
            <SwiperSlide >
                    <div className='rounded-xl p-1 shadow-black hover:shadow-xl cursor-pointer my-5'>
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
            </SwiperSlide>
          ))}
        </Swiper> 
        <ToastContainer/>  
      </div>
    </div>
  )
}

export default FoodsSlider