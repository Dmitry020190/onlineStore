import React from "react";
import style from "./Info.module.css";
import {NavLink} from "react-router-dom";

const Info = (props) => {
  return (
    <div className = {style.wrappInfo}>
      <div className = {style.info}><NavLink to="/about_us">About Us</NavLink></div>
      <div className = {style.info}><NavLink to="/contact_us">Contact Us</NavLink></div>
      <div className = {style.info}><NavLink to="/track_order">Track Order</NavLink></div>
    </div>
  )
};

export default Info;