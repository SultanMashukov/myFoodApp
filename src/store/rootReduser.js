import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from './slices/sliceCatalog';
import basketReducer from "./slices/sliceBasket";
import ordersReducer from "./slices/sliceOrders";
import userReducer from "./slices/sliceUser";
import { saveInLocalStorage } from "utils";

const store = configureStore({
    reducer:{
        catalog: catalogReducer,
        basket: basketReducer,
        orders: ordersReducer,
        user: userReducer,
    }
})

store.subscribe(() => {
    saveInLocalStorage('userBasket',store.getState().basket.basketItems) //сохранение состояния корзины в localStorage
    saveInLocalStorage('catalogFavorites',store.getState().catalog.favorites) //сохранение избранных товаров в localStorage
    saveInLocalStorage('lastDeliveryAddress',store.getState().user.address) //сохранение полседнего адреса доставки в localStorage
})

export default store;