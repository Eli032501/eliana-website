import React from "react";
import ImgStyle from "../components/ImgStyle";
import SubText from "../components/SubText";
import profile from "../assets/perfil.jpg";

export default function Header() {
  return (
    <div className="Header">
      <SubText text="bookworm" side=" top " />
      <SubText text="travel seeker" side=" down " />
      <SubText text="music addicted" side=" down " />
      <SubText text="art lover" side=" top " />

      <div className="grid-img">
        <ImgStyle alt="test" src={profile} styleClass="portrait profile-img " />

        <h2 className="title-img">eliana pereira</h2>
      </div>
    </div>
  );
}
