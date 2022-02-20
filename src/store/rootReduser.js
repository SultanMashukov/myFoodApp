import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from './slices/sliceCatalog';
import basketReducer from "./slices/sliceBasket";

export default  configureStore({
    reducer:{
        catalog: catalogReducer,
        basker: basketReducer,
    }
})