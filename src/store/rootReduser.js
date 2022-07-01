import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from './slices/sliceCatalog';
import basketReducer from "./slices/sliceBasket";
import ordersReducer from "./slices/sliceOrders";
import userReducer from "./slices/sliceUser";

const store = configureStore({
    reducer:{
        catalog: catalogReducer,
        basket: basketReducer,
        orders: ordersReducer,
        user: userReducer,
    }
})

const saveBasketInLocalStorage = (itemsArray)=>{
    localStorage.userBasket = JSON.stringify(itemsArray)
}

store.subscribe(() => {
    saveBasketInLocalStorage(store.getState().basket.basketItems)
})

export default store;