import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
    return (
        <div>

            <div className='relative'>
                <video autoPlay loop muted playsInline className="w-full object-cover h-[600px]">
                    <source src="https://static-mkt.toogoodtogo.com/video/web_hero_en_us_1080.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 md:mt-10 flex flex-col items-center justify-center text-center">
                    <h1 className='text-3xl md:text-7xl text-white font-bold '>
                        SAVE GOOD FOOD <br /> FROM GOING TO WASTE
                    </h1>
                    <div className='sm:flex items-center justify-center gap-4 mt-6'>
                        <p className='bg-hash-green text-white p-3 font-bold flex items-center border-b-2'>
                            DOWNLOAD THE APP <FaArrowRightLong className="ml-2" />
                        </p>
                        <p className='text-hash-green bg-white p-3 mt-2 md:mt-0 font-bold flex items-center border-b-3 border-hash-green'>
                            SIGNUP YOUR BUSINESS <FaArrowRightLong className="ml-2" />
                        </p>
                    </div>
                </div>
            </div>


            {/* <div className=" bg-gradient-to-tr from-lime-600 via-emerald-600 to-teal-800">
                <div className="flex flex-wrap gap-4 justify-center pt-32">
                    <div
                        className="flex flex-col gap-2 h-40 text-white rounded-xl shadow-md p-6 max-w-[240px] bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                        <div className="font-semibold text-lg">Today</div>
                        <div className="font-semibold text-5xl tracking-tight">$12.921</div>
                        <div className="font-normal">Gross volume</div>
                    </div>

                    <div
                        className="flex flex-col gap-2 h-40 text-white rounded-xl shadow-md p-6 max-w-[240px] bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                        <div className="font-semibold text-lg">Yesterday</div>
                        <div className="font-semibold text-5xl tracking-tight">$9.524</div>
                        <div className="font-normal">Gross volume</div>
                    </div>
                </div>
            </div> */}


        </div>
    );
};

export default Header;
