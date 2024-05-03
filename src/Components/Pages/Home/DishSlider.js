import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import itemDatas from '../Home/datas/data';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export default function DishSlider() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

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
    <>
    <div className='bg-gray-100 relative py-5'>
      <div className="z-10 w-full absolute flex justify-between top-[1.8rem] px-5 lg:px-10">
        <button onClick={goPrev} disabled={isBeginning} className={`relative left-5 rounded-full shadow shadow-black bg-white hover:bg-gray-200 transition-all duration-300 ${isBeginning ? 'opacity-50 cursor-not-allowed' : ''}`}><MdKeyboardArrowLeft size={30}/></button>
        <button onClick={goNext} disabled={isEnd} className={`relative right-5 rounded-full shadow shadow-black hover:bg-gray-200 transition-all duration-300 bg-white ${isEnd ? 'opacity-50 cursor-not-allowed' : ''}`}><MdKeyboardArrowRight size={30}/></button>
      </div>
      <div className='lg:px-24 px-10'>
        <Swiper
          ref={swiperRef}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            540: {
              slidesPerView: 3,
            },
            790: {
              slidesPerView: 4,
            },
            950: {
              slidesPerView: 5,
            },
            1100: {
              slidesPerView: 6,
            },
            1200: {
              slidesPerView: 7,
              spaceBetween: 14
            }
          }}
          className="mySwiper"
          navigation={false}
        >
          {itemDatas.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={`flex justify-center gap-4 items-center  rounded-full text-black bg-white py-2 px-4 !cursor-pointer`}>
                <img src={item.image} alt='items' width={35} className=' !cursor-pointer'/>
                <h3 className=' !cursor-pointer'>{item.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>   
      </div>
    </div>
    </>
  );
}
