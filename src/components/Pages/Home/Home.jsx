import useTitle from "../../hook/useTitle";
import Banner from "./Banner";
import DiscountOffer from "./DiscountOffer";
import Facility from "./Facility";
import Gallery from "./Gallery";
import ShopByCategory from "./ShopByCategory";



const Home = () => {
    useTitle('Home');
    return (
        <>
            <Banner />
            <Gallery />
            <ShopByCategory />
            <DiscountOffer />
            <Facility />
        </>
    );
};

export default Home;