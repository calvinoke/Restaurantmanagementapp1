import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRestaurants,selectAllRestaurants} from '../../stores/menu/restaurantsSlice'
import RestaurantDetailCard from '../../components/RestaurantDetailCard';
import Tabs from '../../components/Tabs';
import  addToCart  from '../../stores/cart/cartSlice';



const Menu = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(selectAllRestaurants);
    const [activeTab, setActiveTab] = useState('');
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    useEffect(()=> {
        dispatch(fetchRestaurants())
    },[]);

    const onAddRestaurant = (restaurant) =>{
        dispatch(addToCart(restaurant))
     }

     const onTabSwitch = (newActiveTab)=> {
        setActiveTab(newActiveTab);
        let categories = restaurants.restaurants.map((restaurant)=> restaurant.name.name);
        let index = categories.findIndex(category => newActiveTab === category);
        console.log(index);
        if (index > -1) {
            setActiveTabIndex(index);
        } else {
            setActiveTabIndex(0);
        }

     }


    return (
     <div className='bg-white'>
            {  restaurants.status !== 'fulfilled'?
            <div>Loading...</div>:
        <div className='menu-wrapper'>



                 {
                    restaurants.restaurants &&
                    <Tabs
                       list = { restaurants.restaurants .map((restaurant)=> restaurant.name.name)}
                       activeTab={activeTab}
                       onTabSwitch={onTabSwitch}/>

                  }


                <div className=' flex flex-row mx-3'>
                 {
                    restaurants.restaurants && restaurants.restaurants[activeTabIndex].restaurants.map((restaurant, index)=>{
                        return (
                            <RestaurantDetailCard key={index} restaurant={restaurant} onAddRestaurant={onAddRestaurant}/>
                        )
                    })
                  }

                </div>
        </div>


            }

        </div>

    )
}

export default Menu;