import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateData = () => {
    const toy = useLoaderData();
    const { _id, price, rating, quantity, description } = toy;
    const navigate = useNavigate();
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const description = form.description.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const updataInfo = { description, price, quantity, rating };

        fetch(`https://toy-marketplace-server-gold.vercel.app/update/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updataInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Updated!',
                        text: 'Your Toy\'s Information Updated',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    });
                    form.reset();
                    navigate('/myToy')
                }
            })

    }
    return (
        <form onSubmit={handleUpdate} className="bg-gray-400">
            <div className=" max-w-full w-11/12 md:w-8/12 mx-auto">
                <div className="font-['Poppins', sans-serif] w-full flex justify-center items-center ">
                    <div className="relative w-full pt-4 flex-col flex justify-center items-center bg-transparent border-2 border-[rgba(255,255,255,0.5)] rounded-2xl my-12">
                        <div className='w-10/12 md:w-5/6'>
                            <h2 className="text-3xl text-white text-center font-bold mb-16">Please Update</h2>
                            <div className='md:flex gap-16'>
                                <div className='w-full'>
                                    <div className="relative my-8  border-b-2 border-white">
                                        <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="text" name="description" id="description" defaultValue={description} />
                                        <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1" htmlFor="description">Please Write Description</label>
                                    </div>
                                    <div className="relative my-8  border-b-2 border-white">
                                        <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="text" name="quantity" id="quantity" defaultValue={quantity} />
                                        <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1" htmlFor="quantity">Available quantity</label>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className="relative my-8  border-b-2 border-white">
                                        <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="text" name="price" id="price" defaultValue={price} />
                                        <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1" htmlFor="price">Price</label>
                                    </div>
                                    <div className="relative my-8  border-b-2 border-white">
                                        <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="text" name="rating" id="rating" defaultValue={rating} />
                                        <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1" htmlFor="rating">Rating</label>
                                    </div>
                                </div>
                            </div>
                            <div className=" my-6  flex ">
                                <input type="submit" value="UPDATE" className="btn btn-primary w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default UpdateData;