import React from 'react'
import DishSlider from './DishSlider'
import Filter from './Filter'
import FoodItems from './FoodItems'
const HomePage = () => {
  return (
    <div>
      <DishSlider/>
      <Filter/>
      <FoodItems/>
    </div>
  )
}

export default HomePage