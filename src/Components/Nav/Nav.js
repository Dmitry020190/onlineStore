import React from "react";
import style from "./Nav.module.css";
import logo from "../../Img/Logo/Logo.png";
import basket from "../../Img/Logo/Basket.png";
import {NavLink} from "react-router-dom";
import Menu from "../Menu/Menu.js";

const Nav = (props) => {
  return (

    <div className = {style.blockNav}>
      <div className = {style.wrappNav}>
        <div className = {style.wrappBlok1}>
          <div className = {style.wrappMenu}>
            <Menu />
          </div>
          <div className = {style.wrappBlok1_1}>
            <div className = {style.wrappSearch}>
              <img src = "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" className = {style.search} />
            </div>
          </div>
          <div className = {style.wrappBlok1_2}>
            <div className = {style.nav}>
              <NavLink to="/home">HOME</NavLink>
            </div>
            <div className = {style.nav}>
              <NavLink to="/catalog">CATALOG</NavLink>
            </div>
            <div className = {style.nav}>
              <NavLink to="/leather_jackets">LEATHER JACKETS</NavLink>
            </div>
          </div>
        </div>
        <div className = {style.wrappBlok2}>
          <div className = {style.wrappLogo}>
            <NavLink to="/home"><img src = {logo} className = {style.logo}/></NavLink>
          </div>
        </div>
        <div className = {style.wrappBlok3}>
          <div className = {style.wrappBlok3_1}>
            <div className = {style.nav}>
              <NavLink to="/coats_parkas">COATS & PARKAS</NavLink>
            </div>
            <div className = {style.nav}>
              <NavLink to="/shoes">SHOES</NavLink>
            </div>
            <div className = {style.nav}>
              <NavLink to="/accessories">ACCESSORIES</NavLink>
            </div>
          </div>
          <div className = {style.wrappBlok3_2}>
            <div className = {style.wrappCurrency}>
              <div className = {style.wrappBlok1_1}>
                <div className = {style.wrappSearch}>
                  <img src = "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" className = {style.search} />
                </div>
              </div>
              <div className = {style.currency}>
                USD
              </div>
              <div className = {style.wrappBasket}>
                <img src = {basket} className = {style.basket} />
              </div>
            </div>
          </div>  
        </div>
      </div>
      <div className = {style.saleInfo}>
        WAREHOUSE CLEARANCE SALE ENDS TODAY.
      </div>
    </div>
  ) 
};

export default Nav;