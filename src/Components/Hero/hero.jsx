import React from 'react';
import { Link } from 'react-router-dom';

import css from '../Hero/hero.module.css'; // Ensure to adjust import path based on your project structure
import HeroImg from '../../assets/hero.png'; // Ensure to adjust import path based on your project structure
import { RiWhatsappFill } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';

const Hero = () => {
    return (
        <div className={css.container}>
            <div className={css.hero}>
                <div className={css.textSection}>
                    <span className={css.text1}>
                        Stylish Aluminum options for contemporary windows and doors.
                    </span>
                    <div className={css.text2}>
                        <span>Ready to Upgrade?</span>
                        <span>Explore Our Stylish Selections Now!</span>
                    </div>
                    <div className={css.links}>
                        <Link to="https://your-whatsapp-link.com" className={css.whatsappLink}>
                            <RiWhatsappFill /> WhatsApp
                        </Link>
                        <Link to="https://your-arrow-right-link.com" className={css.arrowRightLink}>
                            <span>Download Catalogue</span>
                            <BsArrowRight />
                        </Link>
                    </div>
                </div>
                <div className={css.imageSection}>
                    <img className={css.heroImg} src={HeroImg} alt='' />
                </div>
            </div>
            <div className={css.stats}>
                <div className={css.stat}>
                    <span>2615+</span>
                    <span>Windows Delivered</span>
                </div>
                <div className={css.stat}>
                    <span>1289+</span>
                    <span>Doors Fitted</span>
                </div>
                <div className={css.stat}>
                    <span>523+</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    );
}

export default Hero;
