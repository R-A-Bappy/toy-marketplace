import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Gallery = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('https://toy-marketplace-server-gold.vercel.app/allToy')
            .then(res => res.json())
            .then(data => setToys(data.slice(0, 20)))
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div>
            <h2 className="text-center text-6xl font-bold text-gray-700 mt-24 mb-16">Gallery</h2>
            <div className="columns-4 gap-3 w-10/12 mx-auto space-y-3 pb-28">
                {
                    toys.map(toy => <div key={toy._id} className="bg-gray-200 break-inside-avoid transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"><img src={toy.photoUrl} alt="" /></div>)
                }
            </div>
        </div>
    );
};

export default Gallery;