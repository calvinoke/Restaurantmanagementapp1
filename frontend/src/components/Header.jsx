 import { Link } from "react-router-dom";
 import pork from "../assets/images/pork.avif";
 //import carticon from '../assets/icons/carticon.png';
 import carticon2 from '../assets/icons/carticon2.jpg';
 import padlock2 from '../assets/icons/padlock2.jpg';



 const Header = (cartCount) =>{
    return (
        <nav id = "header" className="bg-black text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between ml-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <Link to="/" className="toggleColor text-white no-underline font-bold text-2xl lg:text-4xl">
                    <img src={pork} alt="foodicon"className="w-40 h-40 object-cover" />
                    </Link>

                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to="/" className="text-xl">Home</Link>
                    <Link to="#about" className="text-xl">About</Link>
                </div>

                <div className="flex items-center justify-center space-x-4">
                    <Link to ="/cart" className="mr-4 relative">
                        <img src={padlock2} alt="cart"  className ="w-7 h-7 object-cover"></img></Link>
                        {cartCount > 0 ? <div className="rounded-full bg-yellow-400 text-white inline-flex justify@center items-center w-full absolute -top-1 -right">{cartCount}</div> : null}




                    <Link to ="login">Log In</Link>
                    <Link to ="register">Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;