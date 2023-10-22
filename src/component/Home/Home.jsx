import AccordionDetail from "../Accordion/AccordionDetail";
import AddBanner from "../AddBanner/AddBanner";
import Contact from "../Contact/Contact";
import HomePageProduct from "../HomePageProduct/HomePageProduct";
import ProductBrand from "../ProductBrand/ProductBrand";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AddBanner></AddBanner>
            <ProductBrand></ProductBrand>
            <HomePageProduct></HomePageProduct>
            <AccordionDetail></AccordionDetail>
            <Contact></Contact>
        </div>
    );
};

export default Home;