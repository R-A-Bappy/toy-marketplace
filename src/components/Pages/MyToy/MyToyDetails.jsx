
import { Link } from "react-router-dom";




const MyToyDetails = ({ myToy, handleDelete }) => {
    const { _id, name, photoUrl, price, rating, quantity, category, description } = myToy;

    return (
        <tr>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td className="w-1/6">{name && name}</td>
            <td className="w-1/6">{category && category}</td>
            <td className="w-1/6">{price && price}</td>
            <td className="w-1/6">{quantity && quantity}</td>
            <td className="w-1/6">{rating && rating}</td>
            <td className="w-1/6">{description && description}</td>
            <td className="w-1/6">
                <Link to={`/dataUpdate/${_id}`}><button className="btn btn-info w-full">Update</button></Link>
            </td>
        </tr >
    );
};

export default MyToyDetails;