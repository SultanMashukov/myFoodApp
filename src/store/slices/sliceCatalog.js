import { createSlice } from "@reduxjs/toolkit";
import initState from '../../database/catalog';

const catalogSlice = createSlice({
    name: 'catalog',
    initialState:{
        catalogItems: initState,
        modalIsActive: false,
        productModalId: '',
    },
    reducers:{
        toggleModal(state){
            state.modalIsActive = !state.modalIsActive;
        },
        setProductModalId(state,action){
            console.log(action.payload.id);
            state.productModalId = action.payload.id;
        }
    }

})

export const { toggleModal, setProductModalId} = catalogSlice.actions;

export default catalogSlice.reducer;