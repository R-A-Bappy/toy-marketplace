import { useEffect, useState } from "react";
import DiscountOfferDetails from "./DiscountOfferDetails";


const DiscountOffer = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('https://toy-marketplace-server-gold.vercel.app/allToy')
            .then(res => res.json())
            .then(data => setToys(data.slice(0, 3)))
    }, [])
    return (
        <div>
            <h2 className="text-center text-6xl font-bold text-gray-700 mt-24 mb-16">Discount Offer</h2>
            <div className="md:flex md:gap-4">
                {
                    toys.map(toy => <DiscountOfferDetails key={toy._id} toy={toy}></DiscountOfferDetails>)
                }
            </div>
        </div>
    );
};

export default DiscountOffer;