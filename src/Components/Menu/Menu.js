import React from "react";
import style from "./Menu.module.css";
import close from "../../Img/Icon/iconClose.png";
import {NavLink} from "react-router-dom";

const Menu = (props) => {

  let newStyleElem = React.createRef();

  let clickSendMenu = () => {
    let newStyle = newStyleElem.current;
    newStyle.style.display = "block";
  }
  
  let clickCloseMenu = () => {
    let newStyle = newStyleElem.current;
    newStyle.style.display = "none";
  }

	return (
		
    <div className = {style.wrapperMenu}>
      <div className = {style.wrappMenu} onClick = {clickSendMenu}>
        <div className = {style.sandMenu}>
          <div className = {style.sandItem}></div>
          <div className = {style.sandItem}></div>
          <div className = {style.sandItem}></div>
        </div>
      </div>
      <div className = {style.wrappSizeSandMenu} ref = {newStyleElem}>
        <div className = {style.wrappClose}>
          <div className = {style.currency}>USD</div>
          <div className = {style.wrappImgClose} onClick = {clickCloseMenu}>
            <img src={close} className = {style.close} />
          </div>
        </div>
        <div className = {style.wrappItemElement}>
          <NavLink to = "/home" activeClassName={style.active}>
            <div className = {style.itemElement}>
              HOME
            </div>
          </NavLink>
          <NavLink to = "/catalog" activeClassName={style.active}>
            <div className = {style.itemElement}>
              CATALOG
            </div>
          </NavLink>
          <NavLink to = "/leather_jackets" activeClassName={style.active}>
            <div className = {style.itemElement}>
              LEATHER JACKETS
            </div>
          </NavLink>
          <NavLink to = "/coats_parkas" activeClassName={style.active}>
            <div className = {style.itemElement}>
              COATS & PARKAS
            </div>
          </NavLink>
          <NavLink to = "/shoes" activeClassName={style.active}>
            <div className = {style.itemElement}>
              SHOES
            </div>
          </NavLink>
          <NavLink to = "/accessories" activeClassName={style.active}>
            <div className = {style.itemElement}>
              ACCESSORIES
            </div>
          </NavLink>
        </div>
        <div className = {style.wrappItemElementInfo}>
          <div className = {style.itemElementInfo}>
            <NavLink to = "/about_us" activeClassName={style.active}>
              About Us
            </NavLink>
          </div>
          <div className = {style.itemElementInfo}>
            <NavLink to = "/contact_us" activeClassName={style.active}>
              Contact Us
            </NavLink>
          </div>
        </div>
        <div className = {style.itemElementInfo}>
          <NavLink to = "/track_order" activeClassName={style.active}>
            Track Order
          </NavLink>
        </div>
      </div>
    </div>  
	)
}

export default Menu;