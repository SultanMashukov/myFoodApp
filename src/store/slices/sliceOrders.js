import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { OrdersAPI } from "api";

export const addOrder = createAsyncThunk(
    'orders/addOrder',
    async function(userData, {rejectWithValue} ) {
        try{
            const response = await OrdersAPI.add(userData.address , userData.positions  )

            if(response.statusText !== "OK"){
                throw new Error('ServerError!')
            }
            return response.data;
        }catch(e){
            return rejectWithValue(e.message)
        }
        
    }
)

export const fetchOrders = createAsyncThunk(
    'orders/fetchOrders',
    async function(_args, {rejectWithValue} ) {
        try{
            let page = _args?.page || null
            const response = await OrdersAPI.getAll(page)

            if(response.statusText !== "OK"){
                throw new Error('ServerError!')
            }
            return response.data;
        }catch(e){
            return rejectWithValue(e.message)
        }
        
    }
)

export const fetchOrderDetails = createAsyncThunk(
    'orders/fetchOrderDetails',
    async function(userData, {rejectWithValue} ) {
        try{
            const response = await OrdersAPI.getDetail(userData.orderId)

            if(response.statusText !== "OK"){
                throw new Error('ServerError!')
            }
            return response.data;
        }catch(e){
            return rejectWithValue(e.message)
        }
        
    }
)




const ordersSlice = createSlice({
    name: 'orders',
    isFetching: false,
    isSuccsess: false,
    initialState:{
        currentDetailInfo:{
            id:'',
            showComponent:false,
        },
        ordersList:[],
    },
    reducers: {

        setCurrentDetailId(state, action){
            state.currentDetailInfo.id = action.payload.currentDetailId;
        },
        
        toggleModal(state, action){
            switch(action.payload){
                case 'on':
                    state.currentDetailInfo.showComponent = true;
                    break;
                case 'off':
                    state.currentDetailInfo.showComponent = false;
                    break;
                default:
                    state.currentDetailInfo.showComponent = !state.currentDetailInfo.showComponent;
                    break;
            } 
            
        },
        resetOrdersList(state){
            state.ordersList = []
        }
    },
    extraReducers:{
        //добавление заказа
        [addOrder.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.ordersList.push(payload.newOrder)
        },
        [addOrder.pending]: (state) => {
            state.isFetching = true;
        },
        [addOrder.rejected]: (state) => {
            state.isFetching = false;
        },

        //получение истории заказов
        [fetchOrders.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.ordersList = [...state.ordersList, ...payload]
        },
        [fetchOrders.pending]: (state) => {
            state.isFetching = true;
        },
        [fetchOrders.rejected]: (state) => {
            state.isFetching = false;
        },

        //получение детальной информации о заказае
        [fetchOrderDetails.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.ordersList.find(el => el.id === payload.orderId).positions = payload.positions
            state.ordersList = [...state.ordersList]
        },
        [fetchOrderDetails.pending]: (state) => {
            state.isFetching = true;
        },
        [fetchOrderDetails.rejected]: (state) => {
            state.isFetching = false;
        }
    }
})

export default ordersSlice.reducer;

export const { addNewOrder, setCurrentDetailId,toggleModal, resetOrdersList } = ordersSlice.actions;