export const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                <div className="">
                    <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Restaurants</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#" className="hover::underline">About</a>
                        </li>

                        <li class="mb-4">
                            <a href="#" className="hover::underline">Restaurant Menu</a>
                        </li>

                    </ul>

                </div>


                <div className="">
                    <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Legal</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#" className="hover::underline">Restaurants Privacy Policy</a>
                        </li>

                        <li class="mb-4">
                            <a href="#" className="hover::underline">Restaurant Licensing</a>
                        </li>

                        <li class="mb-4">
                            <a href="#" className="hover::underline">Terms &amp; Conditions</a>
                        </li>


                    </ul>

                </div>




            </div>

            <div  class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-300 sm:text-center">2023 June Restaurant and Food Delivery.All Rights Reserved!!</span>

            </div>
        </footer>
    )
}

export default Footer;