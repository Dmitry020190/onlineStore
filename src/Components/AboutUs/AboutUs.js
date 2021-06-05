import React from "react";
import style from "./AboutUs.module.css";
import AboutUsPhoto from "../../Img/Info/ABOUT_US/ABOUT.png";

const AboutUs = (props) => {
  return (
    <div className = {style.containerWrappAboutUs}>
      <div className = {style.wrappAboutUs}>
        <div className = {style.aboutUsBlock1}>
          ABOUT US
        </div>
        <div className = {style.aboutUsBlock2}>
          <div className = {style.wrappImg}>
            <img src={AboutUsPhoto} className = {style.img} />
          </div>
        </div>
        <div className = {style.aboutUsBlock3}>
          <div className = {style.text}>David Outwear is all about style. Our exceptional products combined with unmatched customer service will make your shopping experience so awesome that you'll be surprised that companies like us exist.</div>
          <div className = {style.text}>We put our empathizes to provide unique products with great value so you can feel and look special while you rock them at any given time. Our deals are super valuable, we provide coupons regularly and all of our products are covered with a tempting sale on a daily basis.</div>
          <div className = {style.text}>Shopping online can be something scary, but at David Outwear we make sure to cover you first with 30 days money-back guarantee, so you can feel comfortable to shop with us knowing we got your back.</div>
        </div>
      </div>
    </div>
  )
};

export default AboutUs;

