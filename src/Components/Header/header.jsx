import React from "react";
import "./header.min.css";
import CompLogo from "./images/logo.svg";

function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="header_con">
          <div className="header_logo">
            <figure>
              <img src={CompLogo} alt="MKV Logo" />
            </figure>
          </div>
          <nav>
            <div className="nav_con">
              <ul>
                <li>
                  <a href="javascript:;">About</a>
                </li>
                <li>
                  <a href="javascript:;">Fleet</a>
                </li>
                <li>
                  <a href="javascript:;">Faqs</a>
                </li>
                <li>
                  <a href="javascript:;">Blog</a>
                </li>
                <li>
                  <a href="javascript:;">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="header_right_con">
            <select name="" id="">
              <option value="AED">AED</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="USD">USD</option>
            </select>
            <select name="" id="">
              <option value="English">English</option>
              <option value="Francias">Francias</option>
              <option value="Spanish">Spanish</option>
              <option value="Bisdak">Bisdak</option>
            </select>
            <div className="theme_btn">
              <ion-icon name="moon"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
