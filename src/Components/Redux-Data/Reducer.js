import { createSlice } from '@reduxjs/toolkit';
import fooditems from '../Pages/Home/datas/Food-data';
const getTotalPrice = (foodcart) => {
    let totalPrice = 0;
    foodcart.forEach((item) => {
        totalPrice += item.Price;
    });
    return totalPrice;
};

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
            state.totalCartAmount=getTotalPrice(state.foodcart);
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
            state.totalCartAmount=getTotalPrice(state.foodcart);
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
            state.totalCartAmount=getTotalPrice(state.foodcart);
        }
        
    }
});

export const { AddItemsCar,IncreaseFoodQuantity,DecreaseFoodQuantity } = reducerAction.actions;
export default reducerAction.reducer;
