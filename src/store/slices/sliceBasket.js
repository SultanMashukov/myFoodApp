import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState:{
        basketItems:[],
        basketPriceSumm: 0,
        basketPositionsCount: 0
    },
    reducers: {
        addItemToBasket(state, action){
            state.basketItems.push({
                name: action.payload.name,
                count: action.payload.count,
            })
        },
        removeFromBasket(state, action){
            state.basketItems = state.basketItems.filter(item => item.id !== action.payload.id)
        }
    }
})

export default basketSlice.reducer;

export const {addItemToBasket, removeFromBasket} = basketSlice.actions;