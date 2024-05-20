import { createSlice } from '@reduxjs/toolkit';
import fooditems from '../Pages/Home/datas/Food-data';
import { toast } from 'react-toastify';
const getTotalPrice = (foodcart) => {
    let totalPrice = 0;
    foodcart.forEach((item) => {
        totalPrice += item.Price;
    });
    return totalPrice;
};
const getTotalDelivery = (foodcart) => {
    let totalPrice = 0;
    foodcart.forEach((item) => {
        totalPrice += item.Deliveryfees;
    });
    return totalPrice;
};

// const notify=()=>{
//     toast.success("This Item Already Added on Cart", {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         })}
        const notifywarn=()=>{
            toast.warn("This Item Already Added on Cart", {
                  position: "top-center",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                })}
const reducerAction = createSlice({
    name: "FoodItemMenu",
    initialState: {
        FoodMenu: fooditems,
        tempfoodMenu:[],
        foodcart: [],
        tempList: {},
        totalCartAmount:0,
        FilterButton:false,
        DeliveryFees:7,
        Rating:3,
        totalDeliveryAmount:0
        
    },
    reducers: {
        AddItemsCar: (state, action) => {
            const existingIndex = state.foodcart.findIndex(item => item.id === action.payload.id);
            if(existingIndex === -1)
                {
                    state.foodcart=[...state.foodcart,action.payload];
                   
                }
                else
                {
                    notifywarn();
                }
            state.totalCartAmount=getTotalPrice(state.foodcart);
            state.totalDeliveryAmount=getTotalDelivery(state.foodcart);
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
            state.totalDeliveryAmount=getTotalDelivery(state.foodcart);
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
            state.totalDeliveryAmount=getTotalDelivery(state.foodcart);
        },
        DeleteList:(state,action)=>{
            const idToDelete = action.payload.id;
            state.foodcart = state.foodcart.filter(item => item.id !== idToDelete);
            state.totalCartAmount=getTotalPrice(state.foodcart);
            state.totalDeliveryAmount=getTotalDelivery(state.foodcart);
        },
        FilteringItems:(state,action)=>{
            state.FilterButton=action.payload;
            state.tempfoodMenu=state.FoodMenu;
        },
        FilteringCondition:(state,action)=>{
            state.tempfoodMenu=state.FoodMenu.filter((items)=>(items.Deliveryfees<=state.DeliveryFees && items.Rating>=state.Rating));
        },
        DeliveryChange:(state,action)=>{
            state.DeliveryFees=action.payload;
        },
        RatingChange:(state,action)=>{
            state.Rating=action.payload;
        }
        
    }
});

export const { AddItemsCar,IncreaseFoodQuantity,DecreaseFoodQuantity, DeleteList,FilteringItems,FilteringCondition,DeliveryChange,RatingChange } = reducerAction.actions;
export default reducerAction.reducer;
