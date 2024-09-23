import React, { useEffect, useState } from "react";
import { logo } from "../assets/index";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
const [isOpen, setIsOpen] = useState(false)



useEffect(() => {

})

  return (
    <nav>
      <div className="nav__container">
        <div className="nav__row row">
          <Link to={"/"}>
            <img src={logo} alt="" className="nav__logo--img" />
          </Link>
          <ul className="nav__links--list">
            <Link to={"/"} className="nav__link--hover-effect">
              <li className="nav__link">Search Events By Artist</li>
            </Link>
            <Link to={"/contact"}>
              <li>
                <button className="nav__btn">Contact</button>
              </li>
            </Link>
          </ul>
          {/* HAMBURGER MENU */}
          <button className="nav__btn--menu hidden" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon="bars" />
          </button>
          <div className={`${isOpen ? "menu__backdrop visible" : "menu__backdrop hidden"}`}>
            <button className="nav__btn--menu nav__btn--menu-close" onClick={() => setIsOpen(!isOpen)}>
              <FontAwesomeIcon icon="times" />
            </button>
              <ul className="menu__list">
                <li className="menu__list--item">
                  <Link to={"/"} onClick={() => setIsOpen(!isOpen)}  className="menu__link">Home</Link>
                </li>
                <li className="menu__list--item">
                  <Link to={"/"} onClick={() => setIsOpen(!isOpen)} className="menu__link">Search Events</Link>
                </li>
                <li className="menu__list--item">
                  <Link to={"/contact"} onClick={() => setIsOpen(!isOpen)} className="menu__link">Contact</Link>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
