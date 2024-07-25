import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { BiMenu, BiX } from 'react-icons/bi';

import {
  BiLogoFacebookSquare,
  BiLogoInstagramAlt,
  BiLogoWhatsapp,
  BiLogoYoutube,
  BiPhone,
} from 'react-icons/bi';
import css from './header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className= {isMenuOpen ? `${css.container} ${css.show}` : `${css.container}`} onClick={toggleMenu}>
      <div className={isMenuOpen ? `${css.logo} ${css.show}` : `${css.logo}`}>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className={css.logoname}>
          <span>G. NADAF ALUMINIUM</span>
          <span>Doors and Windows</span>
        </div>
      </div>

      <div className= {isMenuOpen ? `${css.navigator} ${css.show}` : `${css.navigator}`} onClick={toggleMenu}>

        <div className={css.right}>
          <div className={isMenuOpen ? `${css.hamburger} ${css.show}` : `${css.hamburger}`} onClick={toggleMenu} >
            <BiMenu className={css.menuIcon}/>
          </div>
          <div className={isMenuOpen ? `${css.cross} ${css.show}` : `${css.cross}`} onClick={toggleMenu} >
            <BiX />
          </div>

          <div className={isMenuOpen ? `${css.menu} ${css.show}` : `${css.menu}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/trend" onClick={() => setIsMenuOpen(false)}>Trending</Link>
            <Link to="/product" onClick={() => setIsMenuOpen(false)}>Products</Link>
            {/*<Link to="/service" onClick={() => setIsMenuOpen(false)}>Services</Link>*/}
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>

          <div className={css.socialc}>
            <div className={isMenuOpen ? `${css.social} ${css.show}` : `${css.social}`}>
              <Link to="https://www.facebook.com/">
                <BiLogoFacebookSquare className={css.socialIcon} />
              </Link>
              <Link to="https://www.instagram.com/">
                <BiLogoInstagramAlt className={css.socialIcon} />
              </Link>
              <Link to="https://www.youtube.com/">
                <BiLogoYoutube className={css.socialIcon} />
              </Link>
              <Link to="https://wa.me/0000000">
                <BiLogoWhatsapp className={css.socialIcon} />
              </Link>
              <Link to="tel:00000000000">
                <BiPhone className={css.socialIcon} />
              </Link>
            </div>


          </div>


        </div>


      </div>

    </nav>
  );
};

export default Header;
