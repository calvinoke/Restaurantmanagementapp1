import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    restaurants: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            return {restaurants: [...state.restaurants, {...action.payload, amount:1}]};
        },

        //removes the items from the cart
        clearCart: (state) => {
            return {restaurants: []}
        },

        increamentRestaurantAmount: (state, action) => {
            return {
                restaurants: state.restaurants.map(restaurant => restaurant.id === action.payload.id ? {...restaurant, amount: restaurant.amount + 1} : restaurant)}
            },
        decreamentRestaurantAmount: (state, action) => {
            return {
                    restaurants: state.restaurants.map(restaurant => restaurant.id === action.payload.id ? {...restaurant, amount: restaurant.amount - 1} : restaurant)}
        }
    }
})

export const cartRestaurants = state =>state.cart.restaurants

export const {addToCart, clearCart, increamentRestaurantAmount, decreamentRestaurantAmount} = cartSlice.actions

export default cartSlice.reducer
