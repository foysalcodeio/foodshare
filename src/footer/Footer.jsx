const Footer = () => {
    return (
        <div className="mt-2 mx-auto w-full relative text-center bg-hash-green text-white">
            <div className="py-8 md:py-14 xl:pt-20 xl:pb-12">
                <h2 className="font-bold text-4xl p-5 bg-[#0b3c3c] xl:text-9xl">
                    TO GOOD TOO GO
                </h2>
                
                <div className="mt-14 xl:mt-10">
                    <nav className="flex flex-wrap justify-center text-lg font-medium">
                        <div className="px-5 py-2"><a href="#">Legal</a></div>
                        <div className="px-5 py-2"><a href="#">Privacy Policy</a></div>
                        <div className="px-5 py-2"><a href="#">Contact us</a></div>
                        <div className="px-5 py-2"><a href="#">Food waste source</a></div>
                        <div className="px-5 py-2"><a href="#">Status</a></div>
                    </nav>
                    <p className="mt-7 text-base">© 2023 XYZ, LLC</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;