import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState:{
        basketItems: localStorage.userBasket ? JSON.parse(localStorage.userBasket): [],
        needDelivery: false,
        deliveryAddress: '',
        modalInfo: {
            modalIsActive: false,
            basketItemId: '',
            productId: ''
        }
        
    },
    reducers: {
        addItemToBasket(state, action){
            state.basketItems.push({
                basketId: Date.now().toString(16) + action.payload.productId,
                productId: action.payload.productId,
                name: action.payload.name,
                image: action.payload.image,
                count: action.payload.count,
                price: action.payload.price,
                priceSum: action.payload.count * action.payload.price,
                options:action.payload.options,
                removeMark: false,
                type: action.payload.type,
            })
        },
        repeatBasketByOrder(state, action){
            const basketItems = action.payload.orderPositions.map((position)=>{
                return {
                    basketId: Date.now().toString(16) + position.catalog.id,
                    productId: position.catalog.id,
                    name: position.catalog.name,
                    image: position.catalog.images[0],
                    count: position.count,
                    price: position.catalog.price,
                    priceSum: position.count * position.catalog.price,
                    options: position.options,
                    removeMark: false,
                    type: position.catalog.food_type.code,
                }
            })
            state.basketItems = basketItems;
        },
        changeItemInBasket(state, action){
            const itemId = state.basketItems.findIndex((item) => item.basketId === action.payload.basketItemId);
            state.basketItems[itemId].count = action.payload.count
            state.basketItems[itemId].options =action.payload.options
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
        setModalInfo(state, action){
            state.modalInfo.basketItemId = action.payload.basketItemId;
            state.modalInfo.productId = action.payload.productId;
        },
        toggleModal(state, action){
            switch(action.payload){
                case 'on':
                    state.modalInfo.modalIsActive = true;
                    break;
                case 'off':
                    state.modalInfo.modalIsActive = false;
                    break;
                default:
                    state.modalInfo.modalIsActive = !state.modalInfo.modalIsActive;
                    break;
            } 
            
        },
        resetBasket(state){
            state.basketItems = []
        }
    },
})




export default basketSlice.reducer;

export const {
    addItemToBasket, removeFromBasket, restoreItemToBasket, 
    toggleDelivery, changeItemInBasket, toggleModal, 
    setModalInfo, repeatBasketByOrder, resetBasket} = basketSlice.actions;