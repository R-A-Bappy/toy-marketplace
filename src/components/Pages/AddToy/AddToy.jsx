
import Swal from 'sweetalert2'
import useTitle from '../../hook/useTitle';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';




const AddToy = () => {
    const { user } = useContext(AuthContext);
    useTitle('Add Toy');

    const handleAddToy = e => {
        e.preventDefault();
        const form = e.target;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const description = form.description.value;
        const toyData = { sellerEmail, sellerName, name, photoUrl, price, rating, quantity, category, description }

        fetch('https://toy-marketplace-server-gold.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Toy added',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }

    return (
        <div className="font-['Poppins', sans-serif] flex justify-center items-center min-h-screen bg-gray-400">
            <div className="relative w-11/12 md:w-5/6 pt-4 flex-col flex justify-center items-center bg-transparent border-2 border-[rgba(255,255,255,0.5)] rounded-2xl my-12">
                <form onSubmit={handleAddToy} className='w-10/12 md:w-5/6'>
                    <h2 className="text-3xl text-white text-center font-bold mb-16">Add Toy</h2>
                    <div className='md:flex gap-16'>
                        <div className='w-full'>
                            <div className="relative my-8  border-b-2 border-white">
                                <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="text" name="sellerName" id="sellerName" required />
                                <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1" htmlFor="sellerName">Your Name</label>
                            </div>
                            <div className="relative my-8  border-b-2 border-white">
                                <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="email" name="sellerEmail" id="sellerEmail" required defaultValue={user.email} />
                                <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1" htmlFor="sellerEmail">Your Email</label>
                            </div>
                            <div className="relative my-8 border-b-2 border-white">
                                <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="text" name="name" id="name" required />
                                <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1  " htmlFor="name">Toy Name</label>
                            </div>
                            <div className="relative my-8 border-b-2 border-white">
                                <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="text" name="photoUrl" id="photUrl" required />
                                <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1  " htmlFor="photoUrl">Photo URL</label>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className="relative my-8  border-b-2 border-white">
                                <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="text" name="price" id="price" required />
                                <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1" htmlFor="price">Price</label>
                            </div>
                            <div className="relative my-8 border-b-2 border-white">
                                <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="text" name="rating" id="rating" required />
                                <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1  " htmlFor="rating">Rating</label>
                            </div>
                            <div className="relative my-8  border-b-2 border-white">
                                <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="text" name="quantity" id="quantity" required />
                                <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1" htmlFor="quantity">Available quantity</label>
                            </div>

                            <div className="relative my-8 border-b-2 border-white">
                                <select name="category" id="category" className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white">
                                    <option value="truck" className='bg-gray-400 text-white'>Truck</option>
                                    <option value="bus" className='bg-gray-400 text-white'>Bus</option>
                                    <option value="car" className='bg-gray-400 text-white'>Car</option>
                                </select>
                                <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1" htmlFor="category">Category</label>
                            </div>
                        </div>

                    </div>
                    <div className='relative my-14 md:my-8 border-b-2 border-white'>
                        <textarea name="description" id="description" cols="30" rows="5" className="w-full h-6 bg-transparent outline-none pr-[35px] pl-[5px] text-white"></textarea>
                        <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-6" htmlFor="description">Please Write Description</label>
                    </div>
                    <input className="w-full btn mt-4 btn-secondary font-semibold text-lg mb-8" type="submit" value="Add Toy" />

                </form>
            </div>
        </div>
    );
};

export default AddToy;