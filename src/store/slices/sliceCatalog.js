import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCatalogItems = createAsyncThunk(
    'catalog/fetchCatalogItems',
    async function(_args, {rejectWithValue}) {
        try{
            let page = _args?.page ? `&page=${_args.page}`: ''
            let category = _args?.category ? `&category=${_args.category}`: ''
            let name = _args?.name ? `&name=${_args.name}`: ''
            const response = await fetch(`http://localhost:5000/api/catalog/get_all?limit=8${page+category+name}`)
            
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
    toggleShowFavorites} = catalogSlice.actions;

export default catalogSlice.reducer;