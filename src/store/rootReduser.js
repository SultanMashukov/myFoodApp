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

const saveInLocalStorage = (keyName,itemsArray)=>{
    localStorage[keyName] = JSON.stringify(itemsArray)
}

store.subscribe(() => {
    saveInLocalStorage('userBasket',store.getState().basket.basketItems) //сохранение состояния корзины в localStorage
    saveInLocalStorage('catalogFavorites',store.getState().catalog.favorites) //сохранение избранных товаров в localStorage
})

export default store;