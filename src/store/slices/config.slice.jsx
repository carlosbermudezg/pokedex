import { createSlice } from '@reduxjs/toolkit';

export const configSlice = createSlice({
    name: 'config',
    initialState: {
        pokemonsPerPage: 20,
        darkmode: false
    },
    reducers: {
        changeConfig: (state, action)=>{
            return action.payload
        }
    }
})

export const { changeConfig } = configSlice.actions;

export default configSlice.reducer;
