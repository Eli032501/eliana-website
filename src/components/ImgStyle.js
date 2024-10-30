import React from "react";
import "./ImgStyle.css";

export default function ImgStyle({ alt, src, styleClass }) {
  return (
    <figure className={`${styleClass} ImgStyle`}>
      <img src={src} alt={alt} />
    </figure>
  );
}
