import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
    name: 'username',
    initialState: '',
    reducers: {
        username: (state, action)=>{
            return action.payload
        }
    }
})

export const { username } = userNameSlice.actions;

export default userNameSlice.reducer;
