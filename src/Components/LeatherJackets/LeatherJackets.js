import React from "react";
import style from "./LeatherJackets.module.css";
import Jacket from "../Jacket/Jacket.js";
import {NavLink} from "react-router-dom";

const LeatherJackets = (props) => {
  let JacketItem = props.catalog.jacket.map( (catItem) =>
    <Jacket photo = {catItem.photo} 
            name = {catItem.name} 
            typeOfClothing = {catItem.typeOfClothing} 
            review = {catItem.review} 
            cost = {catItem.cost} 
            currency = {catItem.currency}
    />
  )

  return (
    <div className ={style.wrappCatalog}>
      <div className = {style.wrappParagraph}>
        <div className = {style.wrappNameParagraph}>
          <NavLink to = "/catalog">CATALOG</NavLink>
        </div>
        <div className = {style.wrappItemParagraph}>
          <div className = {style.paragraph}>
            <NavLink to = "/leather_jackets" activeClassName={style.active}>Leather Jackets</NavLink>
          </div>
          <div className = {style.paragraph}>
            <NavLink to = "/coats_parkas">Coats & Parkas</NavLink>
          </div>
          <div className = {style.paragraph}>
            <NavLink to = "/shoes">Shoes</NavLink>
          </div>
          <div className = {style.paragraph}>
            <NavLink to = "/accessories">Accessories</NavLink>
          </div>
        </div>
      </div>
      <div className = {style.catalog}>
        {JacketItem}
      </div>
    </div>
  )
};

export default LeatherJackets;


