import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState:{
        id:1,
        name: 'Vasya',
        address:{
            string: 'ул. Кукукев ',
            coord: [12,12]
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