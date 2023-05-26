import { useLoaderData } from "react-router-dom";
import { Rating, ThinStar } from '@smastrom/react-rating';
import useTitle from "../../hook/useTitle";

const ToyDetails = () => {
    const toyDetail = useLoaderData();
    const { _id, name, photoUrl, price, rating, quantity, category, description } = toyDetail;
    useTitle(`Toy Details/${_id}`);

    const myStyles = {
        itemShapes: ThinStar,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }

    return (

        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl w-11/12 md:w-10/12 mx-auto my-20">
                <figure><img className="h-96" src={photoUrl} alt="Toy image" /></figure>
                <div className="card-body">
                    <p className="text-lg text-gray-500"> <span className="text-2xl font-semibold text-gray-800">Name:</span> {name}</p>
                    <p className="text-lg text-gray-500"> <span className="text-2xl font-semibold text-gray-800">Description:</span> {description}</p>
                    <p className="text-lg text-gray-500"> <span className="text-2xl font-semibold text-gray-800">Category:</span> {category}</p>
                    <p className="text-lg text-gray-500"> <span className="text-2xl font-semibold text-gray-800">Quantity:</span> {quantity}</p>
                    <div className="flex">
                        <p className="text-lg text-gray-500"><span className="text-2xl font-semibold text-gray-800">Price:</span> ${price}</p>
                        <Rating style={{ maxWidth: 200 }} value={rating} itemStyles={myStyles} readOnly />
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ToyDetails;