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
            console.log(response);
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
        isAuth: false,
        id:1,
        name: '',
        email: '',
        address:{
            string: 'Россия г.Ростов-на-Дону ул. Строителей козиматов качественных, 28 кв.1',
            coord: [45.042710, 41.952956]
        },
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",

    },
    reducers: {
        setAddress(state, action){
            state.address = action.payload;
        },
        clearState(){

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
            state.username = payload.name;
            console.log(payload);
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
        [checkAuth.fulfilled]: (state) => {
            state.isAuth = true;
            state.isFetching = false;
        },
        [checkAuth.pending]: (state) => {
            state.isFetching = true;
        },
        [checkAuth.rejected]: (state) => {
            state.isAuth = false;
            state.isFetching = false;
        }
    }
})

export default userSlice.reducer;

export const { setAddress, clearState } = userSlice.actions;