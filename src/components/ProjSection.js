import React from "react";
import ImgStyle from "../components/ImgStyle";
import SubText from "../components/SubText";

// import "./ProjSection.css";

export default function ProjSection({ title, text, subtitle, img, link }) {
  return (
    <div className="ProjSection wrapper">
      <div className="group-grid">
        <SubText text="click here and check it out" side=" down" />

        <a className="grid-img" href={link} target="_blank" rel="noreferrer">
          <ImgStyle
            alt={`${title} image `}
            src={img}
            styleClass="portrait prj-img"
          />
          <h2 className="title-img">{title}</h2>
        </a>
      </div>
      <span className="grid-content">
        <h4>{subtitle}</h4>
        <p className="prj-description">{text}</p>
      </span>
    </div>
  );
}
