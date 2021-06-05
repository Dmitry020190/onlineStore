import React from "react";
import style from "./ParkasCatalog.module.css";
import CoatsParkas from "../CoatsParkas/CoatsParkas.js";
import {NavLink} from "react-router-dom";

const ParksCatalog = (props) => {

  let ParkItem = props.catalog.parks.map( (park) => 
    <CoatsParkas  photo = {park.Item} 
                  name = {park.name} 
                  typeOfClothing = {park.typeOfClothing} 
                  review = {park.review} 
                  cost = {park.cost} 
                  currency = {park.currency} 
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
            <NavLink to = "/coats_parkas" activeClassName={style.active}>Coats & Parkas</NavLink>
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
        {ParkItem}
      </div>
    </div>
  )
};

export default ParksCatalog;