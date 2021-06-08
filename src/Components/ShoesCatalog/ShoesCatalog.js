import React from "react";
import style from "./ShoesCatalog.module.css";
import Shoes from "../Shoes/Shoes.js";
import {NavLink} from "react-router-dom";

const ShoesCatalog = (props) => {

  let ShoesItem = props.catalog.shoes.map( (catItem) =>
    <Shoes  photo = {catItem.photo} 
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
            <NavLink to = "/leather_jackets">Leather Jackets</NavLink>
          </div>
          <div className = {style.paragraph}>
            <NavLink to = "/coats_parkas">Coats & Parkas</NavLink>
          </div>
          <div className = {style.paragraph}>
            <NavLink to = "/shoes" activeClassName={style.active}>Shoes</NavLink>
          </div>
          <div className = {style.paragraph}>
            <NavLink to = "/accessories">Accessories</NavLink>
          </div>
        </div>
      </div>
      <div className = {style.catalog}>
        {ShoesItem}
      </div>
    </div>
  )
};

export default ShoesCatalog;

