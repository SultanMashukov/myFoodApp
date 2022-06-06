import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState:{
        id:1,
        name: 'Vasya',
        address:{
            string: 'Россия г.Ростов-на-Дону ул. Строителей козиматов качественных, 28 кв.1',
            coord: [45.042710, 41.952956]
        }
    },
    reducers: {
        setAddress(state, action){
            state.address = action.payload;
        }
    }
})

export default userSlice.reducer;

export const {setAddress} = userSlice.actions;