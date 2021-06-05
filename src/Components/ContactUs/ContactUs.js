import React from "react";
import style from "./ContactUs.module.css";
import ButtonSend from "../ButtonViewing/ButtonSend.js";

const ContactUs = (props) => {
  return (
    <div className = {style.wrappContainerContactUs}>
      <div className = {style.containerWrappContactUs1}>
        <div className = {style.wrappContactUs}>
          <div className = {style.contactUsBlock1}>
            CONTACT US
          </div>
          <div className = {style.contactUsBlock2}>
            <div className = {style.wrappText}>
              We would love to hear your feedback and thoughts. If you have any questions or you just want to share a photo of your new item on our store, you can email us at support@davidoutwear.com or use the contact form below!
            </div>
            <div className = {style.wrappText}>
              220 The Vale, London, United Kingdom
            </div>
          </div>
        </div>
      </div>
      <div className = {style.containerWrappContactUs2}>
        <div className = {style.contactUsBlock3}>
          <div className = {style.wrappInfoName}>
            <div className = {style.infoName1}>NAME</div>
            <div className = {style.infoName2}></div>
          </div>
          <div className = {style.wrappInfoName}>
            <div className = {style.infoName3}>EMAIL</div>
            <div className = {style.infoName4}>JJJJ</div>
          </div>
        </div>
        <div className = {style.contactUsBlock4}>
          <div className = {style.infoName5}>MESSAGE</div>
          <div className = {style.infoName6}></div>
        </div>
      </div>
      <ButtonSend /> 
    </div>
  )
};

export default ContactUs;