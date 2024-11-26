import image from './../../../assets/dashboard.png'
const Sections = () => {
    return (
        <div>
            <section className="pt-8 lg:pt-32 bg-center bg-cover">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
                    <div className="border border-light-orange p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
                        <span className="font-inter text-xs font-medium text-hash-green ml-3"
                        >Explore how to use for brands.</span>
                        <a href="javascript:;" className="w-8 h-8 rounded-full flex justify-center items-center bg-light-orange">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                                    stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                    <h1
                        className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-hash-green mb-5 md:text-5xl leading-[50px]">
                        Control your Finances with our
                        <span className="text-light-orange"> Smart Tool </span>
                    </h1>
                    <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
                        Invest intelligently and discover a better way to manage your entire
                        wealth easily.
                    </p>
                    <a href="javascript:;"
                        className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-hash-green shadow-xs hover:bg-hash-green transition-all duration-500">
                        Create an account
                        <svg className="ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <div className="flex justify-center">
                        <img
                            src={image}
                            alt="Dashboard image"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sections;