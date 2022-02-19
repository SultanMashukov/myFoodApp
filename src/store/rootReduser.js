import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from './slices/sliceCatalog'

export default  configureStore({
    reducer:{
        catalog: catalogReducer,
    }
})