import React, { useState } from 'react';
import { FaMoon } from "react-icons/fa";
import { PiSunDimFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const links = [
        { name: "Home", href: "#home" },
        { name: "Business Solution", href: "#BSolution", hasDropdown: true },
        { name: "About us", href: "#about" },
        { name: "Food Waste", href: "#waste" },
    ];

    const dropdownLinks = [
        { name: "Consulting", href: "consulting" },
        { name: "Partnership", href: "partnership" },
        { name: "Solution", href: "solution" },
        { name: "Support", href: "support" },
    ]

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
                            <div key={link.name} className='relative group'>
                                
                                <a
                                    // key={link.name}
                                    href={link.href}
                                    className={`${darkMode ? "text-green-50 hover:text-white hover:duration-75 hover:-translate-y-1 hover:border-b-2" : "text-[#00615F] hover:text-blue-500 hover:duration-75 hover:-translate-y-1"} font-medium`}
                                    onClick={(e) => {
                                        if (link.hasDropdown) {
                                            e.preventDefault();
                                            setDropdownOpen(!dropdownOpen)
                                        }
                                    }}
                                >
                                    {link.name}
                                </a>

                                {
                                    link.hasDropdown && dropdownOpen && (
                                        <div className={`absolute left-0 mt-1 ml-24 md:mt-2 md:ml-2 bg-white ${darkMode ? "text-black" : "text-[#00615F]"} border rounded-md shadow-lg w-48`}>
                                            {
                                                dropdownLinks.map((dropdownLink) => (
                                                    <a key={dropdownLink.name} href={dropdownLink.href} className='block px-4 py-2 hover:bg-gray-200'>
                                                        {dropdownLink.name}
                                                    </a>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </nav>

                <div className='flex items-center space-x-4'>              
                <button className={`${darkMode ? "bg-green-200 text-hash-green" : "bg-hash-green text-green-200"} p-1 rounded-md font-bold flex items-center gap-1 justify-center sm:p-2`}> <FaHeart className='animate-bounce mt-1' /> Donate</button>
                
                    <button onClick={toggleTheme} className='p-2 rounded-full border-gray-300 dark:border-[#00615F]' aria-label="Toggle Theme">
                        {
                            darkMode ?
                                (
                                    <FaMoon />
                                )
                                :
                                (
                                    <PiSunDimFill />
                                )
                        }
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;