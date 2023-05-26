import { Link } from "react-router-dom";


const AllToyData = ({ toy }) => {
    const { _id, sellerName, category, price, quantity, name } = toy;
    return (
        <tr>
            <td className="w-1/6">{sellerName && sellerName}</td>
            <td className="w-1/6">{name && name}</td>
            <td className="w-1/6">{category && category}</td>
            <td className="w-1/6">{price && price}</td>
            <td className="w-1/6">{quantity && quantity}</td>
            <th className="w-1/6">
                <Link to={`/toy/${_id}`}><button className="btn btn-info">View Details button</button></Link>
            </th>
        </tr>
    );
};

export default AllToyData;