

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1140&q=80" className="w-full h-screen" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute md:w-96 h-80 bg-white/40 md:bg-white/80 rounded-xl md:top-24 md:left-32 bottom-0">
                    <h1 className="text-center text-4xl font-bold pt-12">Kids Fun & Playing Center</h1>
                    <p className="text-center text-lg pt-4">Get Flat 15% Off On Order</p>
                    <div className="text-center pt-8">
                        <button className="btn btn-secondary">Shop Now</button>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full h-screen" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute md:w-96 h-80 bg-white/40 md:bg-white/80 rounded-xl md:top-24 md:right-32 bottom-0">
                    <h1 className="text-center text-4xl font-bold pt-12">Kids Fun & Playing Center</h1>
                    <p className="text-center text-lg pt-4">Get Flat 15% Off On Order</p>
                    <div className="text-center pt-8">
                        <button className="btn btn-secondary">Shop Now</button>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://plus.unsplash.com/premium_photo-1664100194966-49b523589818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full h-screen" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute md:w-96 h-80 bg-white/40 md:bg-white/80 rounded-xl md:bottom-16 md:right-32 bottom-0">
                    <h1 className="text-center text-4xl font-bold pt-12">Kids Fun & Playing Center</h1>
                    <p className="text-center text-lg pt-4">Get Flat 15% Off On Order</p>
                    <div className="text-center pt-8">
                        <button className="btn btn-secondary">Shop Now</button>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" className="w-full h-screen" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute md:w-96 h-80 bg-white/40 md:bg-white/80 rounded-xl md:bottom-16 md:left-32 bottom-0">
                    <h1 className="text-center text-4xl font-bold pt-12">Kids Fun & Playing Center</h1>
                    <p className="text-center text-lg pt-4">Get Flat 20% Off On Order</p>
                    <div className="text-center pt-8">
                        <button className="btn btn-secondary">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Banner;