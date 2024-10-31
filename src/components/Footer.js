import React from "react";
import "./Footer.css";
import social1 from "../assets/git.png";
import social2 from "../assets/linkedin.png";
import resume from "../assets/file.png";
import ImgStyle from "./ImgStyle";
import SubText from "./SubText";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="social-footer">
        <a
          href="https://www.dropbox.com/scl/fo/5nw4nty5tfs2kpvkry3um/ABgDINgE0nm7Rz0Cr3IRHnQ?rlkey=wrdhrjf443zc9swth7z0by07e&st=zzmt9pvx&dl=0"
          target="_blank"
          rel="noreferrer"
        >
          <ImgStyle src={resume} alt="my resume" styleClass="footer-icon" />
          <SubText text="resume" side="left" />
        </a>
        <a href="https://github.com/Eli032501" target="_blank" rel="noreferrer">
          <ImgStyle src={social1} alt="my github" styleClass="footer-icon" />
          <SubText text="linkedin" side="right" />
        </a>
        <a
          href="https://pt.linkedin.com/in/elianapereira-dev"
          target="_blank"
          rel="noreferrer"
        >
          <ImgStyle src={social2} alt="my linkedin" styleClass="footer-icon" />
          <SubText text="github" side="left" />
        </a>
      </div>
      <a
        className="email-link"
        href="mailto:epereira2135@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        elianapereira.dev@gmail.com
      </a>
    </div>
  );
}
