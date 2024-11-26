import bag from '../../../assets/bag.webp'
import { ShoppingBag, Earth, Pizza, Store } from 'lucide-react';



const Product = () => {
    return (
        <div className="bg-off-white md:p-20">
            <div className=" max-w-7xl mx-auto">
                <div className="text-center font-bold">
                    <h1 className="text-xl md:text-5xl text-hash-green">WHY USE</h1>
                    <h1 className="text-xl md:text-6xl font-gummy text-light-orange">FoodShare</h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='flex flex-col justify-around text-xl font-bold text-hash-green'>
                        <div className='flex justify-center items-center gap-4'>
                            <ShoppingBag />
                            <div className='text-right'>
                                <p>ENJOY GOOD FOOD AT 1/2</p>
                                <p>PRICE OR LESS</p>
                            </div>
                        </div>

                        <div className='flex justify-center items-center gap-4'>
                            <Earth />
                            <div className='text-right'>
                                <p>HELP THE ENVIRONMENT BY</p>
                                <p>REDUCING FOOD WASTE</p>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <img
                            src={bag}
                            className='w-full max-w-[1000px] object-contain'
                            alt="Bag"
                        />
                    </div>





                    <div className='flex flex-col justify-around text-xl font-bold text-hash-green'>
                        <div className='flex justify-left items-center gap-4'>
                            <Pizza />
                            <p>RESCUE FOOD NEAR YOU</p>
                        </div>
                        <div className='flex justify-left items-center gap-4'>
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