import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const links = [
        { name: "Home", href: "#home" },
        { name: "Business Solution", href: "#BSolution" },
        { name: "About us", href: "#about" },
        { name: "Food Waste", href: "#waste" },
    ];

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };


    return (
        <header className={` ${darkMode ? "bg-hash-green text-white" : "bg-white text-hash-green"} shadow-md top-0 z-50 sticky`}>
            <div className='max-w-7xl mx-auto flex justify-between items-center px-4 h-16 sm:px-6 lg:px-8'>
                <div className='text-xl font-bold'>
                    <a href="">FoodShare</a>
                </div>

                <nav className={`${isOpen ? "hidden" : "flex"} flex-col md:flex-row gap-2 md:gap-5 space-x-0 md:space-x-6 absolute md:static duration-500 top-16 left-0 w-full md:w-auto ${darkMode ? "bg-hash-green" : "bg-green-50"} md:bg-transparent md:space-y-0 space-y-2 p-4 md:p-0`}>
                    {
                        links.map((link) => (
                            <a key={link.name} href={link.href} className={`${darkMode ? "text-green-50 hover:text-white hover:duration-75 hover:-translate-y-1" : "text-[#00615F] hover:text-blue-500 hover:duration-75 hover:-translate-y-1"} font-medium`} >{link.name}</a>
                        ))
                    }
                </nav>

                <div className='flex items-center space-x-4'>
                    <button onClick={toggleTheme} className='p-2 rounded-full border-gray-300 dark:border-[#00615F]' aria-label="Toggle Theme">
                        {
                            darkMode ?
                                (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.22 5.47a1 1 0 010 1.42L3.51 7.6a1 1 0 01-1.42-1.42l.71-.71a1 1 0 011.42 0zM16.49 5.47a1 1 0 011.42 0l.71.71a1 1 0 01-1.42 1.42l-.71-.71a1 1 0 010-1.42zM10 8a2 2 0 110 4 2 2 0 010-4zm7 3a1 1 0 110 2h-1a1 1 0 110-2h1zM3 11a1 1 0 110 2H2a1 1 0 110-2h1z"
                                        />
                                    </svg>
                                )
                                :
                                (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-[#00615F]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M10 2c.132 0 .26.053.354.146l.354.353a.5.5 0 01-.708.708l-.354-.353a.5.5 0 01.354-.854zM4.707 4.707a.5.5 0 01.707 0l.354.353a.5.5 0 01-.708.708l-.354-.353a.5.5 0 010-.708zM10 16c.132 0 .26.053.354.146l.354.353a.5.5 0 01-.708.708l-.354-.353a.5.5 0 01.354-.854zM16.646 4.354a.5.5 0 010 .707l-.353.354a.5.5 0 01-.708-.708l.353-.354a.5.5 0 01.708 0zM10 8a2 2 0 100 4 2 2 0 000-4zm7 3a.5.5 0 010 1h-1a.5.5 0 110-1h1zM2 11a.5.5 0 010 1H1a.5.5 0 110-1h1z"
                                        />
                                    </svg>
                                )
                        }
                    </button>


                    <button onClick={() => setIsOpen(!isOpen)} className='md:hidden text-green-700 focus:outline-none' aria-label="Toggle Menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>

                </div>


            </div>
        </header>
    );
};

export default Navbar;