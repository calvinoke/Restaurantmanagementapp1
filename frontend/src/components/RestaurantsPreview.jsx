import React, {useState, useEffect} from 'react';
import RestaurantPreviewCard from './RestaurantPreviewCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {useDispatch} from 'react-redux';
import addToCart from '../stores/cart/cartSlice';

//Displaying the restaurants menu and APIs that will fetch data from the backend.
const RestaurantsPreview = () =>{
    const [restaurants, setRestaurants] = useState([]);
    const dispatch = useDispatch();

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    useEffect(()=> {
        fetch('http://localhost:8080/api/restaurants')
        .then(response => response.json)
        .then(data => setRestaurants(data?.data))
        .catch(e => console.log(e));
    }, [])


    const onAddRestaurant = (restaurant) =>{
       dispatch(addToCart(restaurant))
    }

    return (
        <div className="container mx-auto pb-4 w-2/3 text-white">
            <h2>Restaurants</h2>

            <Carousel responsive={responsive}>

            {
                restaurants?.length >0 && restaurants.map((restaurant, index)=> {
                    return (

                        <div className='w-full p-3'>
                        <RestaurantPreviewCard key={index} restaurant={restaurant} onAddRestaurant={onAddRestaurant} />
                        </div>
                        )
                })
            }
</Carousel>
        </div>
    )
}

export default RestaurantsPreview;