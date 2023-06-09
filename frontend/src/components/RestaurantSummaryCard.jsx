import { useDispatch } from "react-redux"
import { increamentRestaurantAmount,decreamentRestaurantAmount } from "../stores/cart/cartSlice";
export const RestaurantSummaryCard = ({restaurant}) => {

    const dispatch = useDispatch();
    return (
        <div className="flex m-1 p-1 p-1 sm:p-2 border-b border-b-gray-200">
            <div className="product-image border border-grey-200 rounded-lg w-full sm:w-1/3">
                <img src={restaurant.imageUrl} alt= {restaurant.name} />

            </div>

            <div className="product-info">
                <h3>{restaurant.name}</h3>
                <p className="text-gray-600">{restaurant.description}</p>
            </div>

            <div className="product-price-qt flex flex-col items-center justify-center">
                <div className="price">{`${restaurant.price}`}</div>
                <div className="quantity flex">
                    <button className="p-1" disabled={restaurant.amount <= 0} onClick={()=> dispatch(decreamentRestaurantAmount(restaurant))}>-</button>
                    <span className="p-1">{restaurant.amount}</span>
                    <button className="p-1"  onClick={()=> dispatch(increamentRestaurantAmount(restaurant))}>+</button>
                </div>

            </div>

        </div>
    )
}