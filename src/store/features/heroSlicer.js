import { createSlice } from '@reduxjs/toolkit';

export const heroSlice = createSlice({
    name: 'hero',
    initialState: {
        allHero: [],
        hero: [],
        loading: false,
        error: null,
    },

    reducers: {
        heroRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },

        getAllHero: (state, action) => {
            state.loading = false;
            state.allHero = action.payload;
        },

        getHero: (state, action) => {
            state.loading = false;
            state.hero = action.payload;
        },

        heroFailed: (state, action) => {
            state.error = action.payload;
        }
    }

});

export const { heroRequest, getAllHero, getHero, heroFailed } = heroSlice.actions;

export default heroSlice.reducer;


