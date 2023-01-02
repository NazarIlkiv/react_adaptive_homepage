import React from "react";
import "../App.css";
import logo from "./img/logo.svg";

document.addEventListener("click", documentClick);

function documentClick(e) {
  const targetItem = e.target;
  if (targetItem.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");
  }
}

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__logo">
          <img src={logo} alt="logo" />
        </a>
        <nav className="header__menu menu">
          <div className="menu__body">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Home
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  About
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Pages
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <a href="#" className="header__cart cart-header">
          <span className="cart-header__text">Cart</span>
          <span className="cart-header__quantuty">0</span>
        </a>
        <a href="#" className="header__button button">
          Get started
        </a>
        <button className="icon-menu">
          <span></span>
        </button>
      </div>
    </header>
  );
}
