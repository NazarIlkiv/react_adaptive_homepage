import React from "react";
import "../App.css";
import logo from "./img/logo.svg";
import soc01 from "./img/social/01.svg";
import soc02 from "./img/social/02.svg";
import soc03 from "./img/social/03.svg";
import soc04 from "./img/social/04.svg";
import soc05 from "./img/social/05.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__main main-footer">
          <div className="main-footer__container">
            <div className="main-footer__column">
              <a href="#" className="main-footer__logo">
                <img src={logo} alt="logo"></img>
              </a>
              <div className="main-footer__text text">
                <p>
                  Growfy is a template highly suitable for modern marketing
                  agencies, digital studios, startups and businesses. The design
                  is made in the dark style, which makes the site memorable and
                  you can easily adapt it to your brand.
                </p>
              </div>
              <div className="main-footer__social social">
                <a href="#" className="social__link">
                  <img src={soc01} alt="social" />
                </a>
                <a href="#" className="social__link">
                  <img src={soc02} alt="social" />
                </a>
                <a href="#" className="social__link">
                  <img src={soc03} alt="social" />
                </a>
                <a href="#" className="social__link">
                  <img src={soc04} alt="social" />
                </a>
                <a href="#" className="social__link">
                  <img src={soc05} alt="social" />
                </a>
              </div>
            </div>
            <div className="main-footer__column">
              <div className="main-footer__label">Pages</div>
              <nav className="main-footer__menu menu-footer">
                <ul className="menu-footer__list">
                  <li className="menu-footer__item">
                    <a href="#" className="menu-footer__link">
                      Home
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="#" className="menu-footer__link">
                      About
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="#" className="menu-footer__link">
                      Services
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="#" className="menu-footer__link">
                      Packages
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="#" className="menu-footer__link">
                      Blog
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="#" className="menu-footer__link">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="main-footer__column">
              <div className="main-footer__label">Utility pages</div>
              <nav className="main-footer__menu menu-footer">
                <ul className="menu-footer__list">
                  <li className="menu-footer__item">
                    <a href="#" className="menu-footer__link">
                      Instructions
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="#" className="menu-footer__link">
                      Style guide
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="#" className="menu-footer__link">
                      Licenses
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="#" className="menu-footer__link">
                      Changelog
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="#" className="menu-footer__link">
                      404 Not found
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="#" className="menu-footer__link">
                      Password protected
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="main-footer__column">
              <div className="main-footer__label">
                Subscribe to our newsletter
              </div>
              <div className="main-footer__text text">
                Lorem ipsum dolor sit am consectetur adipiscing
              </div>
              <form action="" className="subscribe">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="subscribe__input"
                ></input>
                <button type="submit" className="subscribe__button button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer__bottom bottom-footer">
          <div className="bottom-footer__container">
            <div className="bottom-footer__copy">© 2022</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
