import React from "react";
import s from "../styles/Navbar.module.css";
import Logo from "../assets/react.svg";

function Navbar() {
  return (
    <div className={s.wrapper}>
      <nav className={s.navContainer}>
        <div className={s.logo}>
          <img src={Logo} alt="" />
          <p>ReactFacts</p>
        </div>
        <div className={s.title}>React Course - Project 1</div>
      </nav>
    </div>
  );
}

export default Navbar;
