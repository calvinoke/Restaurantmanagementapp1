import { combineReducers } from "redux";
import cartReducer from './cart/cartSlice';
import restaurantReducer from './menu/restaurantsSlice';
import addressReducer from './userinfo/addressSlice';

const rootReducer = combineReducers(
    {cart: cartReducer,
    restaurants: restaurantReducer,
    adress: addressReducer
}
)

export default rootReducer;