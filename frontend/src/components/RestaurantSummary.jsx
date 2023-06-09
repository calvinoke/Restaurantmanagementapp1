import { useSelector } from "react-redux";
import { cartRestaurants } from "../stores/cart/cartSlice";
import { RestaurantSummaryCard } from "./RestaurantSummaryCard";


export const RestaurantSummary = () => {

    const cart = useSelector(cartRestaurants);
    return (
        <div className="flex fles-col">
            {cart && cart?.map((restaurant, index) => {
                return (
                    <RestaurantSummaryCard restaurant={restaurant} key={index} />
                )
            })}




            </div>
    )
}