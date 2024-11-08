import React from "react";
import "./SocialSection.css";
import vs from "../assets/vs.png";

import ImgStyle from "./ImgStyle";

export default function Skills() {
  return (
    <div className="Skills flex-row">
      <i className="fa-brands fa-html5 fa-2xl"></i>
      <ImgStyle src={vs} alt="vs" styleClass="footer-icon" />
      <ImgStyle src={vs} alt="vs" styleClass="footer-icon" />
      <ImgStyle src={vs} alt="vs" styleClass="footer-icon" />
      <ImgStyle src={vs} alt="vs" styleClass="footer-icon" />
      <ImgStyle src={vs} alt="vs" styleClass="footer-icon" />
      <ImgStyle src={vs} alt="vs" styleClass="footer-icon" />
      <ImgStyle src={vs} alt="vs" styleClass="footer-icon" />
    </div>
  );
}
