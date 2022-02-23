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
                id: action.payload.id,
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
            state.basketItems[action.payload.id].removeMark = true;
        },
        restoreItemToBasket(state, action){
            state.basketItems[action.payload.id].removeMark = false;
        },
        toggleDelivery(state, action){
            state.needDelivery = !state.needDelivery;
        },
        // setBasketPrice(state, action){
        //     state.basketPriceSumm = action.payload.sum;
        // }
    }
})

export default basketSlice.reducer;

export const {addItemToBasket, removeFromBasket, restoreItemToBasket, toggleDelivery} = basketSlice.actions;