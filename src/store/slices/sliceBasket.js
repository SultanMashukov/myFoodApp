import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CatalogAPI } from "api";

export const deleteItem = createAsyncThunk(
    'basket/deleteItem',
    async function(_args, {rejectWithValue, dispatch}) {
        try{
            const res = await new Promise((resolve, reject)=> {
                dispatch(markAsRemove({basketId: _args.basketId}))
                setTimeout(() => {resolve(_args.basketId)}, 5000)
            })
            return res;
        }catch(e){
            return rejectWithValue(e.message)
        }
        
    }
)

export const fetchProductData = createAsyncThunk(
    'catalog/fetchProductData',
    async function(_args, {rejectWithValue}) {
        try{
            const response = await CatalogAPI.getByIds([_args.id])
            
            if(response.statusText !== "OK"){
                throw new Error('ServerError!')
            }
            return response.data;
        }catch(e){
            return rejectWithValue(e.message)
        }
    }
)


const basketSlice = createSlice({
    name: 'basket',
    initialState:{
        basketItems: localStorage.userBasket ? JSON.parse(localStorage.userBasket): [],
        needDelivery: false,
        deliveryAddress: '',
        modalInfo: {
            modalIsActive: false,
            basketItemId: '',
            productId: '',
            productData: null,
            isFetching: false,
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
        markAsRemove(state, action){
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
    extraReducers:{
        //Таймер на удаление товара из корзины
        [deleteItem.pending]: (state, action) =>{
            
        },
        [deleteItem.fulfilled]: (state,action) =>{
            const potentialWillRemove = state.basketItems.find((item) => item.basketId === action.payload)
            if(potentialWillRemove.removeMark){
                state.basketItems = state.basketItems.filter(el => el.basketId !== potentialWillRemove.basketId)
            }   
        },
        [deleteItem.rejected]: (state,action) =>{
            
        },
        //получение деталки товара
        [fetchProductData.pending]: (state) =>{
            state.modalInfo.isFetching = true;
        },
        [fetchProductData.fulfilled]: (state,action) =>{
            state.modalInfo.isFetching = false;  
            state.modalInfo.productData = action.payload[0]
        },
        [fetchProductData.rejected]: (state,action) =>{
            state.modalInfo.isFetching = false;
        },
    }
})




export default basketSlice.reducer;

export const {
    addItemToBasket, markAsRemove, restoreItemToBasket, 
    toggleDelivery, changeItemInBasket, toggleModal, 
    setModalInfo, repeatBasketByOrder, resetBasket} = basketSlice.actions;