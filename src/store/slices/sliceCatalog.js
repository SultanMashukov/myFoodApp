import { createSlice } from "@reduxjs/toolkit";
import initState from '../../database/catalog';

const catalogSlice = createSlice({
    name: 'catalog',
    initialState:{
        catalogItems: initState
    },
    reducers:{
        addItem(state, action){
            state.catalogItems.push({
                id:action.payload.id,
                name: action.payload.name,
                price: action.payload.price
            })
        }
    }

})

export const {addItem} = catalogSlice.actions;

export default catalogSlice.reducer;