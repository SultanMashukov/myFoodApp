import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import initState from '../../database/catalog';

export const fetchCatalogItems = createAsyncThunk(
    'catalog/fetchCatalogItems',
    async function(_, {rejectWithValue}) {
        try{
            const response = await fetch('http://localhost:5000/api/catalog/get_all')
            if(!response.ok){
                throw new Error('ServerError!')
            }
            const data = await response.json();
            return data;
        }catch(e){
            return rejectWithValue(e.message)
        }
        
    }
)

const catalogSlice = createSlice({
    name: 'catalog',
    initialState:{
        catalogItems: null,
        modalIsActive: false,
        productModalId: '',
        listFetchStatus: null,
        listFetchError: null,
        nameFilter:''
    },
    reducers:{
        toggleModal(state){
            state.modalIsActive = !state.modalIsActive;
        },
        setProductModalId(state,action){
            state.productModalId = action.payload.id;
        },
        setNameFilter(state, action){
            state.nameFilter = action.payload.string;
        }
    }, 
    extraReducers:{
        [fetchCatalogItems.pending]: (state) =>{
            state.listFetchStatus = 'pending';
        },
        [fetchCatalogItems.fulfilled]: (state,action) =>{
            state.catalogItems = action.payload;
            state.listFetchStatus = 'loaded';
        },
        [fetchCatalogItems.rejected]: (state,action) =>{
            state.listFetchStatus = 'rejected';
            state.listFetchError = action.payload;
        },
    }

})

export const { toggleModal, setProductModalId, setNameFilter} = catalogSlice.actions;

export default catalogSlice.reducer;