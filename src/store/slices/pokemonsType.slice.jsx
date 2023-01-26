import { createSlice } from '@reduxjs/toolkit';

export const pokemonsTypeSlice = createSlice({
    name: 'pokemonsType',
    initialState: [],
    reducers: {
        setPokemonsType : (state, action)=>{
            return action.payload
        }
    }
})

export const { setPokemonsType } = pokemonsTypeSlice.actions;

export default pokemonsTypeSlice.reducer;
