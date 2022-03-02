import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState:{
        basketSections:{
            mainFood:{
                name: 'Основные блюда',
                placeholder: 'Вы ничего не выбрали из блюд. Нажмите, чтобы добавить.',
            },
            drinks: {
                name: 'Напитки',
                placeholder: 'Вы не выбрали ни один из напитков. Нажмите, чтобы добавить напиток.',
            }
        },
        basketItems: [],
        basketPriceSumm: 0, //надо вычислять автоматом, может this?
        needDelivery: true,
        
    },
    reducers: {
        addItemToBasket(state, action){
            state.basketItems.push({
                basketId: action.payload.basketId,
                productId: action.payload.productId,
                name: action.payload.name,
                image: action.payload.image,
                count: action.payload.count,
                price: action.payload.price,
                priceSum: action.payload.summ,
                options:action.payload.options,
                removeMark: false,
                type: action.payload.type,
            })
        },
        removeFromBasket(state, action){
            const itemId = state.basketItems.findIndex((item) => item.basketId === action.payload.basketId);
            state.basketItems[itemId].removeMark = true;
        },
        restoreItemToBasket(state, action){
            const itemId = state.basketItems.findIndex((item) => item.basketId === action.payload.basketId);
            state.basketItems[itemId].removeMark = false;
        },
        toggleDelivery(state, action){
            state.needDelivery = !state.needDelivery;
        },
    }
})

export default basketSlice.reducer;

export const {addItemToBasket, removeFromBasket, restoreItemToBasket, toggleDelivery} = basketSlice.actions;