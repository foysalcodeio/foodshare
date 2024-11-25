import Marquee from "react-fast-marquee";

const Slider = () => {
    return (
        <div>
            <Marquee className="bg-hash-green text-white p-4 text-4xl font-bold">
                <div className="flex gap-5">
                    <p>SALAD</p>
                    <p>PIZZA</p>
                    <p>BURGERS</p>
                    <p>PASTRIES</p>
                    <p>MUFFINS</p>
                    <p>SANDWICHES</p>
                    <p>POKE</p>
                    <p>SMOOTHIES</p>
                    <p>BREED</p>                    
                    <p>MILK</p>                    
                    <p>NUTS</p>                    
                    <p>WATER</p>                    
                </div>
            </Marquee>
        </div>
    );
};

export default Slider;