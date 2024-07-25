import "./trending.css"; 
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Headers/header";
import Carousel from "../../Components/Carousel/carousel_domal";
import CarouselDoor from "../../Components/Carousel/carousel_door";


const Trending = () => {


  return (
        <div className="product-page">
            <Header/>
            <div className="trend-content">
              <div className="trend-container">
                <div className="domal-container">
                  <Carousel/> 
                </div>
                <div className="door-container">
                  <CarouselDoor/> 
                </div>
              </div>
              
            </div>
            <Footer/>
        </div>
    );
}

export default Trending;
