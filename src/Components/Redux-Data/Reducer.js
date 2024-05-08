import {createSlice} from'@reduxjs/toolkit'
import fooditems from '../Pages/Home/datas/Food-data'
const reducerAction=createSlice({
    name:"FoodItemMenu",
    initialState:{
        FoodMenu:fooditems,
    },
    reducers:{
        
    }
})

export default reducerAction.reducer