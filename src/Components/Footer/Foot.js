import React from "react";
import style from "./Foot.module.css";
import iconConvert from "../../Img/Icon/iconConvert.svg";
import iconLogo from "../../Img/Footer/LOGO_x120@2x.png";
import iconPay from "../../Img/Footer/payment-logos.png";

const Foot = (props) => {
  return (
    <div className = {style.wrappFooter}>
      <div className = {style.footer}>
        <div className = {style.informContact}>
          <div className = {style.itemContact}>
            support@davidoutwear.com
          </div>
          <div className = {style.itemContact}>
            (for returns please contact us)
          </div>
          <div className = {style.itemContact}>
            SERVICE HOURS
          </div>
          <div className = {style.itemContact}>
            Monday-Friday 9.00 to 20.00
          </div>
        </div>
        <div className = {style.wrappInputEmail}>
          <div className = {style.itemInputEmail}>
            Enter your email address to be the first to hear about new products and specials.          </div>
          <div className = {style.wrappEmail}>
            <div className = {style.infEmail}>
              Enter your email
            </div>
            <div className = {style.enterEmail}>
              <img src={iconConvert} className = {style.email}/>
            </div>
          </div>
        </div>
        <div className = {style.linkFoot}>
          <div className = {style.link}>
            FAQ
          </div>
          <div className = {style.link}>
            Contact Us
          </div>
          <div className = {style.link}>
            About Us
          </div>
          <div className = {style.link}>
            Track Order
          </div>
          <div className = {style.link}>
            Return Policy
          </div>
          <div className = {style.link}>
            Cancellation Policy
          </div>
          <div className = {style.link}>
            Terms of Service
          </div>
          <div className = {style.link}>
            Privacy Policy
          </div>
        </div>
        <div className = {style.wrappIconLogo}>
          <img src = {iconLogo} className = {style.iconLogo}/>
        </div>
      </div>
      <div className = {style.wrappInfoPay}>
        <div className = {style.wrappIconPay}>
          <img src = {iconPay} className = {style.iconPay} />
        </div>
        <div className = {style.year}>
          © 2021 David Outwear
        </div>
        <div className = {style.rigths}>
          <div className = {style.item}>
            David Outwear 
          </div>
          <div className = {style.item}>
            All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  )
};

export default Foot;