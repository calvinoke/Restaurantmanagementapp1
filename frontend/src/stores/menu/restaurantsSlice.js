import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    restaurants: [],
    error: null,
    status: 'idle',
}

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurants.fulfilled, (state, action)=> {
            state.status = 'fulfilled'
            state.restaurants = [...action.payload.data]
        });

        builder.addCase(fetchRestaurants.pending, (state, action)=> {
            state.status = 'pending'
        })
    }
})

export const {getRestaurants} = restaurantsSlice.actions

export default restaurantsSlice.reducer

export const fetchRestaurants = createAsyncThunk('restaurants.fetchRestaurants', async ()=> {
    const response = await fetch('http://localhost:8080/api/restaurants-by-categories')
    const data = await response.json()
    return data
})

export const selectAllRestaurants = state => state.restaurants