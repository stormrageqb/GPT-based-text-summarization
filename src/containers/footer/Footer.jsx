import React from "react";
import logo from "../../assets/textxtract2.0.png";
import "./footer.css";

const Footer = () => (
  <>
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="gpt3_logo" />
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Useful Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Our Policies</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>261 Bruce Street, Maryland Heights</p>
          <p>085-132567</p>
          <p>info@textxtract.net</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>@2023 TextXtract. All rights reserved.</p>
      </div>
    </div>
  </>
);

export default Footer;
