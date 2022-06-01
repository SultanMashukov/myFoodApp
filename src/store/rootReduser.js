import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from './slices/sliceCatalog';
import basketReducer from "./slices/sliceBasket";
import ordersReducer from "./slices/sliceOrders";
import userReducer from "./slices/sliceUser";

export default  configureStore({
    reducer:{
        catalog: catalogReducer,
        basket: basketReducer,
        orders: ordersReducer,
        user: userReducer,
    }
})