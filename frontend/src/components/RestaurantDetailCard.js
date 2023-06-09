import Button from "./elements/Button";

const RestaurantDetailCard = ({restaurant, onAddRestaurant})=> {
    return (
        <div className="p-4 rounded-lg bg-slate-50">
            <div className="flex flex-col items-center justify-between">
                <h2 className="text-4xl">{restaurant.name}</h2>
                <p className="text-2xl text-gray-500">
                    {restaurant.description}
                </p>
                <div className="flex items-center justify-between">
                    <div className="text-3xl text-black">{restaurant.price}</div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="text-3xl text-black">{restaurant.location}</div>
                </div>
            </div>

            <div className="w-full flex items-center justify-center">
                <img src={restaurant.imageUrl} className="w-40 h-40 rounded object-cover" alt={restaurant.name} />

            </div>

            <div className="w-full flex items-center justify-center">
                <Button onClick={onAddRestaurant}>Add to Cart</Button>
            </div>


        </div>
    )

}

export default RestaurantDetailCard;