import { createSlice } from '@reduxjs/toolkit';

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: [],
    reducers: {
        setPokemons: (state, action)=>{
            return action.payload
        }
    }
})

export const { setPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
