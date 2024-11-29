import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import bag from '../../../assets/bag.webp';
import { ShoppingBag, Earth, Pizza, Store } from 'lucide-react';
import Aos from 'aos';

const Product = () => {
    useEffect(() => {
        Aos.init(); // Initialize AOS without global duration for per-element control
        //Aos.init({ duration: 2000 }); // Initialize AOS with 2000ms duration
    }, []);

    return (
        <div className="bg-off-white md:p-20 h-auto">
            <div className="max-w-7xl mx-auto">
                {/* Title Section */}
                <div data-aos="fade-up" data-aos-duration="1000" className="text-center font-bold">
                    <h1 className="text-xl md:text-5xl text-hash-green">WHY USE</h1>
                    <h1 className="text-xl md:text-6xl font-gummy text-light-orange">
                        FoodShare
                    </h1>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {/* Left Section */}
                    <div className="flex flex-col justify-around text-xl font-bold text-hash-green">
                        <div
                            className="flex justify-center items-center gap-4"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <ShoppingBag />
                            <div className="text-right">
                                <p>ENJOY GOOD FOOD AT 1/2</p>
                                <p>PRICE OR LESS</p>
                            </div>
                        </div>
                        <div
                            className="flex justify-center items-center gap-4"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            <Earth />
                            <div className="text-right">
                                <p>HELP THE ENVIRONMENT BY</p>
                                <p>REDUCING FOOD WASTE</p>
                            </div>
                        </div>
                    </div>

                    {/* Center Image Section */}
                    <div data-aos="fade-up" data-aos-duration="2500">
                        <img
                            src={bag}
                            className="w-full max-w-[1000px] object-contain"
                            alt="Bag"
                        />
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col justify-around text-xl font-bold text-hash-green">
                        <div
                            className="flex items-center gap-4"
                            data-aos="fade-up"
                            data-aos-duration="3000"
                        >
                            <Pizza />
                            <p>RESCUE FOOD NEAR YOU</p>
                        </div>
                        <div
                            className="flex items-center gap-4"
                            data-aos="fade-up"
                            data-aos-duration="3500"
                        >
                            <Store />
                            <div>
                                <p>TRY SOMETHING NEW FROM</p>
                                <p>LOCAL CAFES, BAKERIES OR</p>
                                <p>RESTAURANTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
