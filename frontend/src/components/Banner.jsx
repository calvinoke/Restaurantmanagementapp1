import Button from "./elements/Button";

const Banner = () => {
    return (
        <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
            <div className="banner-description w-full md:w-1/2 p-3">
                <h2 className="mb-6 text-4xl font-bold text-white">
                    Restaurant and Food Ordering Made easy
                </h2>
                <p className="font-semibold text-lg text-red-600 py-2">
                    Get Started Today
                </p>

                <div className="btn-container">

                    <a href="/menu" className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3">
                    <Button>Order Now</Button>
                        See Restaurants
                    </a>
                </div>
            </div>

            <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
            <img src={require("../assets/images/restaurant2.webp")} alt="banner" className="max-h-50" />
            </div>
        </div>


    )
}

export default Banner;