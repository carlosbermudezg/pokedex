import { createSlice } from '@reduxjs/toolkit';

export const typeSelectedSlice = createSlice({
    name: 'typeSelected',
    initialState: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279',
    reducers: {
        setTypeSelected : (state, action)=>{
            return action.payload
        }
    }
})

export const { setTypeSelected } = typeSelectedSlice.actions;

export default typeSelectedSlice.reducer;