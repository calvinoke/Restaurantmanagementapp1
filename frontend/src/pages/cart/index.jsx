import Tabs from "../../components/Tabs";
import Button from "../../components/elements/Button";
import { useSelector } from "react-redux";
//import { selectAllRestaurants } from "../../stores/menu/restaurantsSlice";
import { cartRestaurants } from "../../stores/cart/cartSlice";
import useTabSwitch from "../../Hooks/useTabSwitch";
import AddressForm from '../../components/AddressForm';
import { RestaurantSummary } from "../../components/RestaurantSummary";
//import { ReactComponent as ArrowRightSvg } from "../../assets/icons/arrow-right-long-svrepo-com.svg";


const Cart = () => {

    const cart = useSelector( cartRestaurants);
    const tabs = ['Summary','Delivery', 'Payment'];
    const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary');
    //console.log(cart);


    if (!cart || cart.length=== 0) {
        return (
            <div className="bg-white h-full text-black flex  justify-center p-4">
                <h1>Your Restaurant Cart is empty</h1>

            </div>
        )
    }
    return (
       <div className="bg-white h-screen text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shaddow-md sm:p-6 lg:p-8">
        <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab = {currentTab} />

        <div className = {`tabs ${currentTab !== 'Summary' ? 'hidden': ''}` }>

            <RestaurantSummary />
             </div>

        <div className = {`tabs ${currentTab !== 'Delivery' ? 'hidden': ''}` }>
        <AddressForm onTabSwitch={handleTabSwitch}/>
        </div>

        <div className = {`tabs ${currentTab !== 'Payment' ? 'hidden': ''}` }> Payment Form</div>

       </div>

    )
}

export default Cart;