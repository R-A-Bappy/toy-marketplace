

const DiscountOfferDetails = ({ toy }) => {
    const { photoUrl, name } = toy;
    return (
        <div className="card card-side bg-base-100 shadow-xl w-11/12 mx-auto mb-4 md:mb-0">
            <figure className="w-4/6 h-80"><img className="h-full" src={photoUrl} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Save 30%</h2>
                <p className="pt-20 text-xl font-bold">{name}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default DiscountOfferDetails;