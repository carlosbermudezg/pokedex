import { configureStore } from '@reduxjs/toolkit'
import userNameSlice from './slices/userName.slice'
import configSlice from './slices/config.slice'
import pageSlice from './slices/page.slice'
import isLoadingSlice from './slices/isLoading.slice'
import pokemonsSlice from './slices/pokemons.slice'
import pokemonsTypeSlice from './slices/pokemonsType.slice'
import typeSelectedSlice from './slices/typeSelected'

export default configureStore({
    reducer: {
        username: userNameSlice,
        config: configSlice,
        page: pageSlice,
        isLoading: isLoadingSlice,
        pokemons: pokemonsSlice,
        pokemonsType: pokemonsTypeSlice,
        typeSelected: typeSelectedSlice
    }
})
