import React from "react";
import css from './footer.module.css';
import Logo from '../../assets/logo_white.png';

import { BiDoorOpen, BiTable, BiLayerMinus, BiSolidPaint , BiPhone, BiMailSend, BiMapPin, BiTrendingUp, BiAccessibility, BiAdjust, BiPackage , BiUser, BiDetail} from 'react-icons/bi';

import { MdCarpenter } from "react-icons/md";


const Footer = () => {
    return (
        <div className={css.cFooterWrapper}>
            <hr/>
            <div className={css.cFooter}>
            <div className={css.logomain}>
                <div className={css.logo}>
                    <img src={Logo} alt=''/>
                </div>
                <div className={css.logoname}>
                    <span>G. NADAF ALUMINIUM</span>
                    <span>Doors and Windows</span>
                </div>
            </div>


            <div className={css.info}>


                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact Us</span>
                        <span className={css.pngLine}>
                            <BiMapPin className={css.icon}/>
                            <span>Timber Area, Miraj-416410</span>
                        </span>

                        <span className={css.pngLine}>
                            <BiPhone className={css.icon}/>
                            <a href="tel:9921270549">+91-9921270549</a>
                        </span>

                        <span className={css.pngLine}>
                            <BiMailSend className={css.icon}/>
                            <a href="mailto:g.nadafaluminium@gmail.com">g.nadafaluminium@gmail.com</a>
                        </span>
                    </div>
                </div>



                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Home</span>
                        <span className={css.pngLine}>
                            <BiTrendingUp className={css.icon}/>
                            <span>Trending</span>
                        </span>
                        <span className={css.pngLine}>
                            <BiAccessibility className={css.icon}/>
                            <span>Accessroies</span>
                        </span>
                        <span className={css.pngLine}>
                            <BiAdjust className={css.icon}/>
                            <span>Repairs & Modification</span>
                        </span>
                        <span className={css.pngLine}>
                            <BiPackage className={css.icon}/>
                            <span>Terms & Conditions</span>
                        </span>



                    </div>
                </div>

                    <div className={css.block}>
                        <div className={css.detail}>
                            <span>Company</span>
                            <span className={css.pngLine}>
                                <BiDetail className={css.icon}/>
                                <span>About Us</span>
                            </span>
                            <span className={css.pngLine}>
                                <BiUser className={css.icon}/>
                                <span>Our Customers</span>
                            </span>

                        </div>
                    </div>


                    <div className={css.block}>
                        <div className={css.detail}>
                            <span>Servies</span>
                            <span className={css.pngLine}>
                                <BiDoorOpen className={css.icon}/>
                                <a href="/about">Door Fitting</a>
                            </span>
                            <span className={css.pngLine}>
                                <BiTable className={css.icon}/>
                                <a href="/about">Window Fitting</a>
                            </span>
                            <span className={css.pngLine}>
                                <MdCarpenter className={css.icon}/>
                                <a href="/about">Carpentry</a>
                            </span>
                            <span className={css.pngLine}>
                                <BiLayerMinus className={css.icon}/>
                                <a href="/about">Glass Fitting</a>
                            </span>
                            <span className={css.pngLine}>
                                <BiSolidPaint className={css.icon}/>
                                <a href="/about">Powder Coating</a>
                            </span>



                        </div>

                </div>


                </div>




                

            </div>


            <div className={css.copyRight}>
                <span>Copyright ©2024 by ProphetBird</span>
                <span>All rights reserved.</span>

            </div>


        </div>
    )
}

export default Footer