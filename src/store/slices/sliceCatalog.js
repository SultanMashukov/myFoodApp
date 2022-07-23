import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CatalogAPI } from "api";

export const fetchCatalogItems = createAsyncThunk(
    'catalog/fetchCatalogItems',
    async function(_args, {rejectWithValue}) {
        try{
            let favoriteIds = _args?.ids || null;
            let page = _args?.page || null;
            let category = _args?.category || null;
            let name = _args?.name || null;

            const response = await CatalogAPI.getAll(favoriteIds, page, category, name)
            
            if(response.statusText !== "OK"){
                throw new Error('ServerError!')
            }
            return response.data;
        }catch(e){
            return rejectWithValue(e.message)
        }
    }
)

const catalogSlice = createSlice({
    name: 'catalog',
    initialState:{
        catalogItems: [],
        favorites: localStorage.catalogFavorites ? JSON.parse(localStorage.catalogFavorites): [],
        showFavorites: false,
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
        toggleShowFavorites(state){
            state.showFavorites = !state.showFavorites;
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
        resetCatalogItems(state){
            state.catalogItems = [];
        }
    }, 
    extraReducers:{
        [fetchCatalogItems.pending]: (state) =>{
            state.listFetchingInfo.status = 'pending';
        },
        [fetchCatalogItems.fulfilled]: (state,action) =>{
            state.catalogItems = [...state.catalogItems, ...action.payload] ;
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
    toggleProductIsFavorite,
    toggleShowFavorites,
    resetCatalogItems} = catalogSlice.actions;

export default catalogSlice.reducer;