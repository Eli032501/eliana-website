import React from "react";
import "./about.css";

import ImgStyle from "../components/ImgStyle";
import img1 from "../assets/test1.jpeg";
export default function About() {
  return (
    <div className="About">
      <span className="gr-portrait">
        <ImgStyle alt="test" src={img1} styleClass="portrait" />

        <h1 className="title-img">eliana pereira</h1>
      </span>
      <h2>about me</h2>
      <p>
        Lorem ipsum dolor sit amet. Et asperiores quia non tempora facere aut
        quia molestiae nam maxime voluptates. Aut fuga maiores sed itaque velit
        est quae illo a iusto fugit non quia dolorum. Ut magnam sint qui iste
        sequi et enim laborum est neque nisi sed esse quaerat!
      </p>
    </div>
  );
}
