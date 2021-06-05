import React from "react";
import style from "./AccessoriesCatalog.module.css";
import Bag from "../Bag/Bag.js";
import {NavLink} from "react-router-dom";

const BagCatalog = (props) => {

  let BagItem = props.catalog.bag.map( (catItem) =>
    <Bag  photo = {catItem.Item} 
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
            <NavLink to = "/shoes">Shoes</NavLink>
          </div>
          <div className = {style.paragraph}>
            <NavLink to = "/accessories" activeClassName={style.active}>Accessories</NavLink>
          </div>
        </div>
      </div>
      <div className = {style.catalog}>
        {BagItem}
      </div>
    </div>
  )
};

export default BagCatalog;