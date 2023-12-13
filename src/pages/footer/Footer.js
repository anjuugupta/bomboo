import React from "react";
import "./footer.css";

//Footer Icons
import xcorp from "../../assets/Twitter.png";
import insta from "../../assets/Instagram.png";
import youtube from "../../assets/YouTube.png";
import hrtag from '../../assets/8.png'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerIcons">
        <img src={xcorp} alt="twitter icon" className="xcorp" />
        <img src={insta} alt="insta icon" className="insta"/>
        <img src={youtube} alt="youtube icons" className="youtube"/>
     </div>
     <img src={hrtag} alt="hrtag" className="footerhr"/>
     <div className="companydetail">
       <p>support@openui.design</p>
       <p>+60 825 876</p>
       <p>08:00 - 22:00 - Everyday</p>
     </div>
     <img src={hrtag} alt="hrtag" className="footerhr"/>

      <div className="footerNav">
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Blog</a></li>
        </ul>
      </div>
      <div className="footerBottom">
        <p>Copyright &copy; OpenUl All Right Reserved</p>
      </div>
    </div>
  );
};
