import { createSlice } from '@reduxjs/toolkit';
import fooditems from '../Pages/Home/datas/Food-data';
const reducerAction = createSlice({
    name: "FoodItemMenu",
    initialState: {
        FoodMenu: fooditems,
        foodcart: [],
        tempList: {},
        toasting:false,
        totalCartAmount:0,
    },
    reducers: {
        AddItemsCar: (state, action) => {
            const existingIndex = state.foodcart.findIndex(item => item.id === action.payload.id);
            if(existingIndex === -1)
                {
                    state.foodcart=[...state.foodcart,action.payload];
                }
            existingIndex === -1?state.toasting=false:state.toasting=true;
            state.totalCartAmount=state.foodcart.map((item)=>(state.totalCartAmount+item.Price));
        },
        IncreaseFoodQuantity: (state, action) => {
            state.foodcart = state.foodcart.map((item) => {
                if (item.id === action.payload.id) {
                    const updatedQuantity = item.Quantity + 1;
                    const updatedPrice = item.Price+item.InitialPrice;
                    return {
                        ...item,
                        Quantity: updatedQuantity,
                        Price: updatedPrice
                    };
                } else {
                    return item; 
                }
            });
            state.totalCartAmount=state.foodcart.map((item)=>(state.totalCartAmount+item.Price));
        },     
        DecreaseFoodQuantity: (state, action) => {
            state.foodcart = state.foodcart.map((item) => {
                if (item.id === action.payload.id) {
                    const updatedQuantity = item.Quantity - 1;
                    const initialPrice = item.InitialPrice;
                    const updatedPrice = initialPrice * updatedQuantity;
        
                    return {
                        ...item,
                        Quantity: updatedQuantity,
                        InitialPrice: initialPrice, 
                        Price: updatedPrice 
                    };
                } else {
                    return item;
                }
            });
        }
        
    }
});

export const { AddItemsCar,IncreaseFoodQuantity,DecreaseFoodQuantity } = reducerAction.actions;
export default reducerAction.reducer;
