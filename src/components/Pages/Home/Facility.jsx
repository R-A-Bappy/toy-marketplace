

const Facility = () => {
    return (
        <div className="mb-24">
            <h2 className="text-center text-6xl font-bold text-gray-700 mt-24 mb-16">Our Facility</h2>
            <div className="md:flex md:justify-around">
                <div className="flex justify-center items-center shadow-md p-8">
                    <img className="w-40 h-40" src="https://media.istockphoto.com/id/120758576/photo/color-toy-car.jpg?s=612x612&w=0&k=20&c=ZBsd6JPQ3uuNGpnSDTU1OWtEVNv01tW-YZ4Is7gsno4=" alt="" />
                    <div>
                        <h2 className="text-xl font-bold text-gray-700">Free Shipping</h2>
                        <p className="font-semibold text-gray-500 mt-2">Deliver To Door</p>
                    </div>
                </div>
                <div className="flex justify-center items-center shadow-md p-8">
                    <img className="w-40 h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRtcF57Jwi5nVCa5g7S1ObIOLB13sYzoMiQ&usqp=CAU" alt="" />
                    <div>
                        <h2 className="text-xl font-bold text-gray-700">24*7 Support</h2>
                        <p className="font-semibold text-gray-500 mt-2">In Safe Hands</p>
                    </div>
                </div>
                <div className="flex justify-center items-center shadow-md p-8">
                    <img className="w-40 h-40" src="https://i.redd.it/91ys7bosxsv61.jpg" alt="" />
                    <div>
                        <h2 className="text-xl font-bold text-gray-700">Money Back</h2>
                        <p className="font-semibold text-gray-500 mt-2">Easy To Return</p>
                    </div>
                </div>
                <div className="flex justify-center items-center shadow-md p-8">
                    <img className="w-40 h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmVkYRWtAiM_juhgCoc0h4PmixnakZ9ER4fA&usqp=CAU" alt="" />
                    <div>
                        <h2 className="text-xl font-bold text-gray-700">Exchange Offer</h2>
                        <p className="font-semibold text-gray-500 mt-2">Easy To Exchange</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facility;