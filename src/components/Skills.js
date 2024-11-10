import React from "react";
import "./SocialSection.css";
import vscode from "../assets/vscode.svg";

import ImgStyle from "./ImgStyle";

export default function Skills() {
  return (
    <div className="Skills flex-row">
      <i className="fa-brands fa-html5 " />
      <i className="fa-brands fa-css3-alt" />
      <i className="fa-brands fa-js" />
      <i className="fa-brands fa-bootstrap" />
      <i className="fa-brands fa-react" />
      <i className="fa-brands fa-github" />
      <i className="fa-brands fa-figma" alt="figma" />
      <ImgStyle src={vscode} alt="vscode" styleClass="footer-icon" />
    </div>
  );
}
