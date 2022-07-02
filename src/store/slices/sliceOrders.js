import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { OrdersAPI } from "api";

export const addOrder = createAsyncThunk(
    'orders/addOrder',
    async function(userData, {rejectWithValue} ) {
        try{
            const response = await OrdersAPI.add(userData.address || {string: 'В ресторане'}, userData.positions  )

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
        }
    }
})

export default ordersSlice.reducer;

export const { addNewOrder, setCurrentDetailId,toggleModal } = ordersSlice.actions;