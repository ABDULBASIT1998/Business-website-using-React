import "./home.css"; 
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Headers/header";
import Hero from "../../Components/Hero/hero";
import Slider from "../../Components/slider/slider";
import Subscription from "../../Components/Subscription/subscription";
import ServSlider from "../../Components/Services/service.slider";

const Home = () => {
    return (
      <div className="home">
          <Header className='h-home'/>
          <Hero />
          <Slider />
          <Subscription />
          <ServSlider />
          <Footer/>
      </div>

    
    
  );
}

export default Home;
