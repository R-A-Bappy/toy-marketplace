
import { Rating, ThinStar } from '@smastrom/react-rating';
import { Link } from 'react-router-dom';

const ShopCategoryDetails = ({ data }) => {
    const { _id, name, photoUrl, price, rating } = data;

    const myStyles = {
        itemShapes: ThinStar,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className='w-full h-96' src={photoUrl} alt={name} /></figure>
            <div className="card-body">
                <p className="text-lg text-gray-500"> <span className="text-2xl font-semibold text-gray-800">Name:</span> {name}</p>
                <p className="text-lg text-gray-500"><span className="text-2xl font-semibold text-gray-800">Price:</span> ${price}</p>
                <Rating style={{ maxWidth: 200 }} value={rating} itemStyles={myStyles} readOnly />
                <div className="card-actions justify-end">
                    <Link to={`/toy/${_id}`}><button className="btn btn-info">View Details button</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ShopCategoryDetails;