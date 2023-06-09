import restaurant1 from "../assets/images/restaurant1.jpg";
import restaurant2 from "../assets/images/restaurant2.webp";
import restaurant3 from "../assets/images/restaurant3.jpg";


const About = () => {
    return (
        <div className="bg-white">
            <div className="">
                <h2 className="text-2xl font-medium">About Us</h2>
                <p className="text-lg">
                    Good Morning, You can search your favourite Restaurants with Delicious Dishes.
                    Terramia
                    “Here, at Terramia, in the center of Kireka Kampala, we don’t accept compromises. Not about our food. All our ingredients are sourced from local producers to ensure quality and freshness.

                </p>

            </div>
            <div className="flex items-center justify-center">
                <img src={restaurant1} alt="" className="w-[250px] h-[250px] object-cover" />
                <img src={restaurant2} alt="" className="w-[250px] h-[250px] object-cover" />
                <img src={restaurant3} alt="" className="w-[250px] h-[250px] object-cover" />
            </div>

        </div>
    )
}

export default About;