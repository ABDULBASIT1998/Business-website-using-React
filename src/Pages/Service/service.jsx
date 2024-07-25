import './service.css';
import '../../Components/Services/service.slider';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Headers/header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ServSlider from '../../Components/Services/service.slider';

const Service = () => {
    return (
        <div className="service-page">
            <Header />
            <div className="service-content">
                <div className="s-title">
                    <span>Our Services</span>
                </div>
                <ServSlider />
            </div>
            <Footer />
        </div>
    );
};

export default Service;
