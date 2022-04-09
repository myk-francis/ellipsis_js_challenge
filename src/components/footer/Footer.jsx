import React from "react";
import "./footer.css";
import facebook from "../../assets/facebook-white.svg";
import instagram from "../../assets/instagram-white.svg";
import twitter from "../../assets/twitter-white.svg";
import apple from "../../assets/app-store.svg";
import android from "../../assets/play-store.svg";
import microsoft from "../../assets/windows-store.svg";

const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="ft-withpadding">
        <div className="fc-ft-top">
          <div className="ft-top-links">
            <div className="footer-top-links-home">
              <span className="footer-top-links-span">Home</span>
            </div>
            <div className="footer-top-links">
              <span className="footer-top-links-span">
                Terms and Conditions
              </span>
            </div>
            <div className="footer-top-links">
              <span className="footer-top-links-span">Privacy Policy</span>
            </div>
            <div className="footer-top-links">
              <span className="footer-top-links-span">
                Collection Statement
              </span>
            </div>
            <div className="footer-top-links">
              <span className="footer-top-links-span">Help</span>
            </div>
            <div className="footer-top-links">
              <span className="footer-top-links-span">Manage Account</span>
            </div>
          </div>
          <div className="ft-top-copyright">
            Copyright © 2016 DEMO Streaming All Rights Reserved.
          </div>
        </div>
        <div className="fc-ft-bottom">
          <div className="ft-bottom-socials">
            <div className="social-fb">
              <img src={facebook} alt="" className="social-svg" />
            </div>
            <div className="social-twitter">
              <img src={twitter} alt="" className="social-svg" />
            </div>
            <div className="social-instagram">
              <img src={instagram} alt="" className="social-svg" />
            </div>
          </div>
          <div className="ft-bottom-buttons">
            <div className="buttons-apple">
              <img src={apple} alt="" className="button-svg" />
            </div>
            <div className="buttons-android">
              <img src={android} alt="" className="button-svg" />
            </div>
            <div className="buttons-microsoft">
              <img src={microsoft} alt="" className="button-svg-micro" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
