import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyToyDetails from "./MyToyDetails";
import Swal from "sweetalert2";
import useTitle from "../../hook/useTitle";


const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [isDelete, setIsDelete] = useState(true);
    const [isUpdate, setIsUpdate] = useState(true);
    const [sortButton, setSortButton] = useState(0);
    useEffect(() => {
        fetch(`https://toy-marketplace-server-gold.vercel.app/myToy/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [isDelete, isUpdate]);
    useTitle('My Toys');

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-marketplace-server-gold.vercel.app/myToy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            if (isDelete)
                                setIsDelete(false);
                            else
                                setIsDelete(true);
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Your Toy Deleted',
                                icon: 'success',
                                confirmButtonText: 'Close'
                            })
                        }

                    })
            }
        })
    }



    const handleAscending = () => {
        setSortButton(1);
        fetch(`https://toy-marketplace-server-gold.vercel.app/myToy/ascending/${user.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))

    }

    const handleDescending = () => {
        setSortButton(2);
        fetch(`https://toy-marketplace-server-gold.vercel.app/myToy/descending/${user.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }
    return (
        <div>
            <div className="btn-group flex justify-center mt-12">
                <button onClick={handleAscending} className={`btn ${sortButton === 1 && "btn-active"}`}>Ascending</button>
                <button onClick={handleDescending} className={`btn ${sortButton === 2 && "btn-active"}`}>Descending</button>
            </div>
            <div className="overflow-x-auto w-full my-16">
                <table className="table w-11/12 md:w-10/12 mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Rating</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(myToy => <MyToyDetails
                                key={myToy._id}
                                myToy={myToy}
                                handleDelete={handleDelete}
                                setIsUpdate={setIsUpdate}
                                isUpdate={isUpdate}
                            ></MyToyDetails>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;