import { useEffect, useState } from "react";
import AllToyData from "./AllToyData";
import useTitle from "../../hook/useTitle";


const AllToy = () => {
    const [toys, setToys] = useState([]);
    useTitle('All Toy');

    useEffect(() => {
        fetch('https://toy-marketplace-server-gold.vercel.app/allToy')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleSeach = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;

        fetch(`https://toy-marketplace-server-gold.vercel.app/allToy/${name}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }


    return (
        <div>
            <form onSubmit={handleSeach} className="form-control mt-16 mb-8">
                <div className="input-group justify-center">
                    <input type="text" placeholder="Enter Toy Name" className="input input-bordered" name="name" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </form>
            <div className="overflow-x-auto w-full mb-16">
                <table className="table w-11/12 md:w-10/12 mx-auto">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <AllToyData key={toy._id} toy={toy}></AllToyData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;