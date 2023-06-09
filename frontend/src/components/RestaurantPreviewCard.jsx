import AddRestaurant from "./AddRestaurant";

const RestaurantPreviewCard = ({restaurant, onAddRestaurant}) => {

    const addRestaurant =() => {
        //TODO: create after setting up redux state for cart to add restaurant here..
        onAddRestaurant(restaurant)
    }

    return (
        <div className="w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent text-center">
            <img src={restaurant.imageUrl} alt="restaurant.name" />
            <h2 className="pb-2 text-lg">{restaurant.name}</h2>
            <p className="mb-2 h-20 line-clamp-4">{restaurant.description}</p>
            <AddRestaurant onAddRestaurant={addRestaurant} />

        </div>
    )
}


export default RestaurantPreviewCard;
