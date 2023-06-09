import {BrowserRouter, Route,Routes} from "react-router-dom";
import  Header  from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Menu from "../pages/Menu";
import Cart from "../pages/cart";
import PayementSuccess from "../pages/Paymentsuccess";
import { useSelector } from "react-redux";
import  { cartRestaurants } from '../stores/cart/cartSlice';
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import RestaurantList from "../components/listRestaurants";
import Edit from "../components/editRestaurant";
import Create from "../components/createRestaurant";


const Navigation = () => {

    const restaurantsInCart = useSelector(cartRestaurants)


    return(
        <BrowserRouter>
        <Header cartCount = {restaurantsInCart ? restaurantsInCart.length : 0}/>
        <Routes>
            <Route path ="/" element ={<Home />} />
            <Route path ="/login" element ={<Login />} />
            <Route path ="/register" element ={<Register />} />
            <Route path ="/menu" element ={<Menu />} />
            <Route path ="/cart" element ={<Cart />} />
            <Route path ="/payment-success" element ={<PayementSuccess/>} />
            <Route path="/restaurant" element={<RestaurantList />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/create" element={<Create />} />
            <Route path="navbar" element={<Navbar />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    )
}

export default Navigation;