import "./contact.css"; 
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Headers/header";
import {  BiPhone, BiMailSend, BiMapPin} from 'react-icons/bi';

const Contact = () => {
    const iframeStyle = {
        width: '82.5vw',
        height: '80vw',
        border: '0',
        // Additional styles can be added here
    };

    return (
        <div className="contact">
            <Header/>
            <div className="c-container">
                <div className="c-title">
                    <span>Get In Touch!</span>
                </div>
                <div className="contact-details">
                    <div className="detail">
                        <span>
                            <BiMapPin className="icon"/>
                            <Link to="https://maps.app.goo.gl/">Timber Area, Miraj-416410</Link>
                        </span>

                        <span>
                            <BiPhone className="icon"/>
                            <a href="tel:000000000">+91-000000000</a>
                        </span>

                        <span>
                            <BiMailSend className="icon"/>
                            <a href="mailto:1232um@gmail.com">g123um@gmail.com</a>
                        </span>
                    </div>
                    <div className="map">
                        <iframe title="address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.190254931216!2d74.64986017412772!3d16.816915118990618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc12394b6f4d493%3A0x8a68269bff5bb62f!2sG.%20Nadaf%20Aluminium!5e0!3m2!1sen!2sin!4v1707317969375!5m2!1sen!2sin" style={iframeStyle} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;
