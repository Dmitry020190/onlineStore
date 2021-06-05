import React from "react";
import style from "./LeatherJacketsOpen.module.css";
import {NavLink} from "react-router-dom";

const LeatherJacketsOpen = (props) => {
  
  let jacketPhoto1 = props.catalog.jacket[0].ItemPhoto[0];
  let jacketPhoto2 = props.catalog.jacket[0].ItemPhoto[1];
  let jacketPhoto3 = props.catalog.jacket[0].ItemPhoto[2];
  let jacketPhoto4 = props.catalog.jacket[0].ItemPhoto[3];
  let jacketPhoto5 = props.catalog.jacket[0].ItemPhoto[4];

  document.onclick = function (event) {
    let elements = document.getElementsByClassName(style.images);
    let frontElements = document.getElementsByClassName(style.frontImages);
    let colorElements = document.getElementsByClassName(style.color);
    let sizeElement = document.getElementsByClassName(style.size);
    let nextElements = document.getElementsByClassName(style.itemNextPhoto);
    
    if (event.target.id == "jacketItem_1" || event.target.id == "itemNext_1") {
      frontElements[0].style.display = "block";
      frontElements[1].style.display = "none";
      frontElements[2].style.display = "none";
      frontElements[3].style.display = "none";
      frontElements[4].style.display = "none";
      elements[0].style.border = "2px solid";
      elements[1].style.border = "none";
      elements[2].style.border = "none";
      elements[3].style.border = "none";
      elements[4].style.border = "none";
      nextElements[0].style.background = "black";
      nextElements[1].style.background = "#d2d2d2";
      nextElements[2].style.background = "#d2d2d2";
      nextElements[3].style.background = "#d2d2d2";
      nextElements[4].style.background = "#d2d2d2";
    } else if (event.target.id == "jacketItem_2" || event.target.id == "itemNext_2") {
      frontElements[0].style.display = "none";
      frontElements[1].style.display = "block";
      frontElements[2].style.display = "none";
      frontElements[3].style.display = "none";
      frontElements[4].style.display = "none";
      elements[0].style.border = "none";
      elements[1].style.border = "2px solid";
      elements[2].style.border = "none";
      elements[3].style.border = "none";
      elements[4].style.border = "none";
      nextElements[0].style.background = "#d2d2d2";
      nextElements[1].style.background = "black";
      nextElements[2].style.background = "#d2d2d2";
      nextElements[3].style.background = "#d2d2d2";
      nextElements[4].style.background = "#d2d2d2";
    } else if (event.target.id == "jacketItem_3" || event.target.id == "itemNext_3") {
      frontElements[0].style.display = "none";
      frontElements[1].style.display = "none";
      frontElements[2].style.display = "block";
      frontElements[3].style.display = "none";
      frontElements[4].style.display = "none";
      elements[0].style.border = "none";
      elements[1].style.border = "none";
      elements[2].style.border = "2px solid";
      elements[3].style.border = "none";
      elements[4].style.border = "none";
      nextElements[0].style.background = "#d2d2d2";
      nextElements[1].style.background = "#d2d2d2";
      nextElements[2].style.background = "black";
      nextElements[3].style.background = "#d2d2d2";
      nextElements[4].style.background = "#d2d2d2";
    } else if (event.target.id == "jacketItem_4" || event.target.id == "itemNext_4") {
      frontElements[0].style.display = "none";
      frontElements[1].style.display = "none";
      frontElements[2].style.display = "none";
      frontElements[3].style.display = "block";
      frontElements[4].style.display = "none";
      elements[0].style.border = "none";
      elements[1].style.border = "none";
      elements[2].style.border = "none";
      elements[3].style.border = "2px solid";
      elements[4].style.border = "none";
      nextElements[0].style.background = "#d2d2d2";
      nextElements[1].style.background = "#d2d2d2";
      nextElements[2].style.background = "#d2d2d2";
      nextElements[3].style.background = "black";
      nextElements[4].style.background = "#d2d2d2";
    } else if (event.target.id == "jacketItem_5" || event.target.id == "itemNext_5") {
      frontElements[0].style.display = "none";
      frontElements[1].style.display = "none";
      frontElements[2].style.display = "none";
      frontElements[3].style.display = "none";
      frontElements[4].style.display = "block";
      elements[0].style.border = "none";
      elements[1].style.border = "none";
      elements[2].style.border = "none";
      elements[3].style.border = "none";
      elements[4].style.border = "2px solid";
      nextElements[0].style.background = "#d2d2d2";
      nextElements[1].style.background = "#d2d2d2";
      nextElements[2].style.background = "#d2d2d2";
      nextElements[3].style.background = "#d2d2d2";
      nextElements[4].style.background = "black";
    } 

    if(event.target.id == "color_1") {
      colorElements[0].style.border = "1px solid";
      colorElements[1].style.border = "1px solid #DCDCDC";
    } else if (event.target.id == "color_2") {
      colorElements[0].style.border = "1px solid #DCDCDC";
      colorElements[1].style.border = "1px solid";
    }

    if (event.target.id == "size_1") {
      sizeElement[0].style.border = "1px solid";
      sizeElement[1].style.border = "1px solid #DCDCDC";
      sizeElement[2].style.border = "1px solid #DCDCDC";
      sizeElement[3].style.border = "1px solid #DCDCDC";
      sizeElement[4].style.border = "1px solid #DCDCDC";
      sizeElement[5].style.border = "1px solid #DCDCDC";
    } else if (event.target.id == "size_2") {
      sizeElement[0].style.border = "1px solid #DCDCDC";
      sizeElement[1].style.border = "1px solid";
      sizeElement[2].style.border = "1px solid #DCDCDC";
      sizeElement[3].style.border = "1px solid #DCDCDC";
      sizeElement[4].style.border = "1px solid #DCDCDC";
      sizeElement[5].style.border = "1px solid #DCDCDC";
    } else if (event.target.id == "size_3") {
      sizeElement[0].style.border = "1px solid #DCDCDC";
      sizeElement[1].style.border = "1px solid #DCDCDC";
      sizeElement[2].style.border = "1px solid";
      sizeElement[3].style.border = "1px solid #DCDCDC";
      sizeElement[4].style.border = "1px solid #DCDCDC";
      sizeElement[5].style.border = "1px solid #DCDCDC";
    } else if (event.target.id == "size_4") {
      sizeElement[0].style.border = "1px solid #DCDCDC";
      sizeElement[1].style.border = "1px solid #DCDCDC";
      sizeElement[2].style.border = "1px solid #DCDCDC";
      sizeElement[3].style.border = "1px solid";
      sizeElement[4].style.border = "1px solid #DCDCDC";
      sizeElement[5].style.border = "1px solid #DCDCDC";
    } else if (event.target.id == "size_5") {
      sizeElement[0].style.border = "1px solid #DCDCDC";
      sizeElement[1].style.border = "1px solid #DCDCDC";
      sizeElement[2].style.border = "1px solid #DCDCDC";
      sizeElement[3].style.border = "1px solid #DCDCDC";
      sizeElement[4].style.border = "1px solid ";
      sizeElement[5].style.border = "1px solid #DCDCDC";
    } else if (event.target.id == "size_6") {
      sizeElement[0].style.border = "1px solid #DCDCDC";
      sizeElement[1].style.border = "1px solid #DCDCDC";
      sizeElement[2].style.border = "1px solid #DCDCDC";
      sizeElement[3].style.border = "1px solid #DCDCDC";
      sizeElement[4].style.border = "1px solid #DCDCDC";
      sizeElement[5].style.border = "1px solid";
    }  
  }

  return(
    <div className = {style.wrappLeatherJacketsOpen}>
      <div className = {style.leatherJacketsOpen}>
        <div className = {style.wrappImages}>
          <div className = {style.images}>
            <img src = {jacketPhoto1} className = {style.jacketItem} id = "jacketItem_1" />
          </div>
          <div className = {style.images}>
            <img src = {jacketPhoto2} className = {style.jacketItem} id = "jacketItem_2" />
          </div>
          <div className = {style.images}>
            <img src = {jacketPhoto3} className = {style.jacketItem} id = "jacketItem_3" />
          </div>
          <div className = {style.images}>
            <img src = {jacketPhoto4} className = {style.jacketItem} id = "jacketItem_4" />
          </div>
          <div className = {style.images}>
            <img src = {jacketPhoto5} className = {style.jacketItem} id = "jacketItem_5" />
          </div>   
        </div>
        <div className = {style.wrappImageFront}>
          <div className = {style.frontImages}>
            <img src = {jacketPhoto1} className = {style.jacketItemFront} />
          </div>
          <div className = {style.frontImages}>
            <img src = {jacketPhoto2} className = {style.jacketItemFront} />
          </div>
          <div className = {style.frontImages}>
            <img src = {jacketPhoto3} className = {style.jacketItemFront} />
          </div>
          <div className = {style.frontImages}>
            <img src = {jacketPhoto4} className = {style.jacketItemFront} />
          </div>
          <div className = {style.frontImages}>
            <img src = {jacketPhoto5} className = {style.jacketItemFront} />
          </div> 
        </div>
        <div className = {style.wrappChoose}>
          <div className = {style.wrappNextPhoto}>
            <div className = {style.itemNextPhoto} id = "itemNext_1"></div>
            <div className = {style.itemNextPhoto} id = "itemNext_2"></div>
            <div className = {style.itemNextPhoto} id = "itemNext_3"></div>
            <div className = {style.itemNextPhoto} id = "itemNext_4"></div>
            <div className = {style.itemNextPhoto} id = "itemNext_5"></div>
          </div>
          <div className = {style.wrappnameProd}>
            <div className = {style.nameProd}>
              {props.catalog.jacket[0].name} {props.catalog.jacket[0].typeOfClothing}
            </div>
          </div>
          <div className = {style.wrappCurrensy}>
            <div className = {style.priceProd}>
              {props.catalog.jacket[0].cost} {props.catalog.jacket[0].currency}
            </div>
          </div>
          <div className = {style.nameColor}>
            COLOR
          </div>
          <div className = {style.colorProd}>
            <div className = {style.color}>
              <div className = {style.itemColor} id = "color_1">
              </div>
            </div>
            <div className = {style.color}>
              <div className = {style.itemColor} id = "color_2">
              </div>
            </div>
          </div>
          <div className = {style.nameSize}>
            SIZE
          </div>
          <div className = {style.sizeProd}>
            <div className = {style.size} id = "size_1">
              {props.catalog.jacket[0].size[0]}
            </div>
            <div className = {style.size} id = "size_2">
              {props.catalog.jacket[0].size[1]}
            </div>
            <div className = {style.size} id = "size_3">
              {props.catalog.jacket[0].size[2]}
            </div>
            <div className = {style.size} id = "size_4">
              {props.catalog.jacket[0].size[3]}
            </div>
            <div className = {style.size} id = "size_5">
              {props.catalog.jacket[0].size[4]}
            </div>
            <div className = {style.size} id = "size_6">
              {props.catalog.jacket[0].size[5]}
            </div>
          </div>
          <div className = {style.buyProd}>
            ADD TO CARD
          </div>
        </div>
      </div>
    </div>
  )
};

export default LeatherJacketsOpen;