import React from "react";
import ImgStyle from "../components/ImgStyle";
import SubText from "../components/SubText";
import img1 from "../assets/test1.jpeg";

export default function Header() {
  return (
    <div className="Header">
      <SubText text="bookaholic" side=" top " />
      <SubText text="creative" side=" down " />
      <SubText text="music addictic" side=" down " />
      <SubText text="passionate" side=" top " />

      <div className="grid-img">
        <ImgStyle alt="test" src={img1} styleClass="portrait profile-img " />

        <h2 className="title-img">eliana pereira</h2>
      </div>
    </div>
  );
}
