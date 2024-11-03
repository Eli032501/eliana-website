import React from "react";
import ImgStyle from "../components/ImgStyle";
import SubText from "../components/SubText";

// import "./ProjSection.css";

export default function ProjSection({ title, text, subtitle, img, link }) {
  return (
    <div className="ProjSection wrapper">
      <span className="subtext-grid">
        <SubText text="click here to check it out" side=" down" />
      </span>
      <a className="grid-img" href={link} target="_blank" rel="noreferrer">
        <ImgStyle
          alt={`${title} image `}
          src={img}
          styleClass="portrait prj-img"
        />
        <h2 className="title-img">{title}</h2>
      </a>

      <span className="grid-full">
        <h4>{subtitle}</h4>
        <p>{text}</p>
      </span>
    </div>
  );
}
