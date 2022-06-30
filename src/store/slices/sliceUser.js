import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserAPI } from "api";

export const signUpUser = createAsyncThunk(
    'user/userSignUp',
    async function(userData, {rejectWithValue} ) {
        try{
            const response = await UserAPI.signUp(userData.name,userData.email, userData.password)

            if(response.statusText !== "OK"){
                throw new Error('ServerError!')
            }
            return response.data;
        }catch(e){
            return rejectWithValue(e.message)
        }
        
    }
)

export const signInUser = createAsyncThunk(
    'user/signInUser',
    async function(userData, {rejectWithValue} ) {
        try{
            const response = await UserAPI.signIn(userData.email, userData.password);
            if(response.statusText !== "OK"){
                throw new Error('ServerError!')
            }
            return response.data;
        }catch(e){
            return rejectWithValue(e.message)
        }
        
    }
)

export const checkAuth = createAsyncThunk(
    'user/checkAuth',
    async function(_,{rejectWithValue}){
        try{
            const response = await UserAPI.authCheck()
            if(response.statusText !== "OK"){
                throw new Error('User not authorized!')
            }
            return response.data;
        }catch(e){
            return rejectWithValue(e.message)
        }
    }
)


export const updateUser = createAsyncThunk(
    'user/updateUser',
    async function(userData,{rejectWithValue}){
        try{
            const response = await UserAPI.update(userData.name, userData.email, userData.phone)
            if(response.statusText !== "OK"){
                throw new Error('User not authorized!')
            }
            return response.data;
        }catch(e){
            return rejectWithValue(e.message)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState:{
        id:'',
        name: '',
        email: '',
        address: null,
        phone: '', 
        address:{
            string: 'ул. Строителей козиматов качественных, 28 кв.1',
            coord: [45.042710, 41.952956]
        },
        isAuth: false,
        isFetching: true,
        isSuccess: false,
        isError: false,
        errorMessage: "",
        editMode: false,
    },
    reducers: {
        setAddress(state, action){
            state.address = action.payload;
        },
        clearState(){

        },
        toggleEditMode(state, action){
            switch(action.payload){
                case 'on':
                    state.editMode = true;
                    break;
                case 'off':
                    state.editMode = false;
                    break;
                default:
                    state.editMode = !state.editMode;
                    break;
            }
        },
    },
    extraReducers:{
        //регистрация
        [signUpUser.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.isAuth = true;
            state.email = payload.email;
            state.username = payload.name;
        },
        [signUpUser.pending]: (state) => {
            state.isFetching = true;
        },
        [signUpUser.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },
        //авторизация
        [signInUser.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.isAuth = true;
            state.email = payload.email;
            state.name = payload.name;
        },
        [signInUser.pending]: (state) => {
            state.isFetching = true;
        },
        [signInUser.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },
        //проверка авторизации
        [checkAuth.fulfilled]: (state, { payload }) => {
            state.isAuth = true;
            state.isFetching = false;
            state.email = payload.email;
            state.name = payload.name;
            state.phone = '+7 909 088 00 99'//payload.phone;
        },
        [checkAuth.pending]: (state) => {
            state.isFetching = true;
        },
        [checkAuth.rejected]: (state) => {
            state.isFetching = false;
        },
        //радактирование профиля
        [updateUser.fulfilled]: (state, { payload }) => {
            state.isAuth = true;
            state.isFetching = false;
            state.phone = 'ГОТОВО'//payload.phone;
        },
        [updateUser.pending]: (state) => {
            state.isFetching = true;
        },
        [updateUser.rejected]: (state) => {
            state.isFetching = false;
        }
    }
})

export default userSlice.reducer;

export const { setAddress, clearState, toggleEditMode } = userSlice.actions;