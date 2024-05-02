import React from 'react';
import itemDatas from './datas/data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {} from 'react-icons/fa'
const DishSlider = () => {
  const arrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '40px', // Adjust the width as needed
    height: '40px', // Adjust the height as needed
    background: 'black', // Customize the background color and opacity
    borderRadius: '50%', // Make the button round
    border: 'none', // Remove the border
    cursor: 'pointer', // Change cursor to pointer on hover
    zIndex: '1', // Ensure the arrows appear above the slider
    
  };
  
  const CustomPrevArrow = (props) => (
    <button
      {...props}
      style={{ ...arrowStyles, left: '-50px' }} // Adjust the left position as needed
    >
      &lt; {/* You can use any icon or text for the arrow */}
    </button>
  );
  
  const CustomNextArrow = (props) => (
    <button
      {...props}
      style={{ ...arrowStyles, right: '-50px' }} // Adjust the right position as needed
    >
      &gt; {/* You can use any icon or text for the arrow */}
    </button>
  );
  const settings = {
    className: 'center',
    infinite: false,
    slidesToShow: 8,
    swipeToSlide: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1110,
        settings: {
          className: 'center',
          infinite: false,
          slidesToShow: 6,
          swipeToSlide: true,
          nextArrow: <CustomNextArrow />,
          prevArrow: <CustomPrevArrow />,
        }
      }
    ]
  };

  return (
    <div className=' bg-gray-100 bg-opacity-50 lg:px-28 px-2 py-4'>
      <Slider {...settings}>
        {itemDatas.map((item, index) => (
          <div key={index} className={`!flex !justify-center gap-1 items-center ${item.class}  rounded-full text-black bg-white py-2 px-4`}>
            <img src={item.image} alt='items' width={35}/>
            <h3>{item.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DishSlider;
