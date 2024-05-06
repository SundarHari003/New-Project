import React, { useState } from 'react'
import DishSlider from './DishSlider'
import Filter from './Filter'
import FoodItems from './FoodItems'
const HomePage = () => {
  const[filterDeliveryValue,setfilterDeliveryValue]=useState();
  const[filterRating,setfilterRating]=useState();
  const handChangeValue=(value)=>{
    setfilterDeliveryValue(value);
  }
  const handChangeValue2=(value)=>{
    setfilterRating(value)
  }
  return (
    <div>
      <DishSlider/>
      <Filter onValueChange={handChangeValue} onValueChange2={handChangeValue2}/>
      <FoodItems Delivery={filterDeliveryValue} Rating={filterRating}/>
    </div>
  )
}

export default HomePage