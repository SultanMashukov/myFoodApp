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
        favorites: localStorage.catalogFavorites ? JSON.parse(localStorage.catalogFavorites): [],
        modalIsActive: false,
        productModalId: '',
        listFetchingInfo:{
            status: null,
            errorMsg: null,
        },
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
        },
        toggleProductIsFavorite(state, action){
            const isFavoriteIndex = state.favorites.indexOf(action.payload)
            if(isFavoriteIndex !== -1){
                state.favorites.splice(isFavoriteIndex, 1)
            }else{
                state.favorites.push(action.payload)
            }
        },
    }, 
    extraReducers:{
        [fetchCatalogItems.pending]: (state) =>{
            state.listFetchingInfo.status = 'pending';
        },
        [fetchCatalogItems.fulfilled]: (state,action) =>{
            state.catalogItems = action.payload;
            state.listFetchingInfo.status = 'loaded';
        },
        [fetchCatalogItems.rejected]: (state,action) =>{
            state.listFetchingInfo.status = 'rejected';
            state.listFetchingInfo.errormsg = action.payload;
        },
    }

})

export const { 
    toggleModal, 
    setProductModalId, 
    setNameFilter,
    toggleProductIsFavorite} = catalogSlice.actions;

export default catalogSlice.reducer;