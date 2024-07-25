import "./about.css"; 
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Headers/header";

const About = () => {
    return (
        <div className="about">
            <Header />
            <div className="a-container">
                <div className="a-title">
                    <span>Our Journey</span>
                </div>
                <div className="detail">
                    <span>
                        Welcome to G. Nadaf Aluminum, where craftsmanship meets innovation. We are a family-owned business with a rich heritage spanning over five decades, dedicated to providing high-quality aluminum windows and doors.

                        Our journey began in 1974 when Maula Kabir Saheb Nadaf, our visionary grandfather, laid the foundation of our carpentry shop. With an innate passion for woodworking, he specialized in crafting exquisite windows and doors, setting a standard of excellence that would define our legacy.

                        In 1996, Mohammad Nadaf, our esteemed uncle, recognized the evolving trends in the industry and transitioned our focus towards aluminum windows and doors. Embracing this new wave of innovation, we aimed to deliver products that not only exuded elegance but also offered enhanced durability and functionality.

                        In 2008, I, Gazali Nadaf, joined forces with my uncle, eager to learn and contribute to our family's craft. Under his expert guidance, I honed my skills and gained invaluable expertise in the realm of aluminum fabrication.

                        With a renewed zeal and a vision to uphold our family's heritage, we relaunched our business in 2011 as G. Nadaf Aluminum, with the 'G' symbolizing my commitment and dedication. Since then, we have continued to thrive, blending traditional craftsmanship with modern techniques to deliver premium aluminum solutions tailored to meet the diverse needs of our clients.

                        At G. Nadaf Aluminum, we take pride in our craftsmanship, attention to detail, and unwavering commitment to customer satisfaction. Whether you're renovating your home or embarking on a commercial project, trust us to transform your vision into reality with our superior quality aluminum windows and doors.

                        Join us as we continue to push boundaries, innovate, and uphold the legacy of excellence that has defined us for generations. Experience the difference with G. Nadaf Aluminum – where tradition meets innovation.
                    </span>
                    <div className="name-info">
                        <div className="text-info">
                            <div className="prop-name">
                                <span>Mr. Gazali Nadaf</span>
                            </div>
                            <div className="title-info">
                                <span>Chief Executive Officer</span>
                            </div>
                            {/*<div className="location-info">
                                <span>Wakhar Bagh, Miraj-416410</span>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
