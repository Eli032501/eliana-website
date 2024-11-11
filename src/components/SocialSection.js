import React from "react";
import "./SocialSection.css";
import social1 from "../assets/Github.svg";
import social1Dark from "../assets/Github-dark.svg";
import social2 from "../assets/Linkedin.svg";
import social2Dark from "../assets/Linkedin-dark.svg";
import resume from "../assets/File.svg";
import resumeDark from "../assets/File-dark.svg";
import ImgStyle from "./ImgStyle";
import SubText from "./SubText";

export default function SocialSection({ iconSize }) {
  return (
    <div className="SocialSection flex-column">
      <div className="social-footer">
        <span className="gr-icon flex-column">
          <a
            href="https://www.dropbox.com/scl/fo/5nw4nty5tfs2kpvkry3um/ABgDINgE0nm7Rz0Cr3IRHnQ?rlkey=wrdhrjf443zc9swth7z0by07e&st=zzmt9pvx&dl=0"
            target="_blank"
            rel="noreferrer"
            className="flex-column"
          >
            <ImgStyle
              src={resume}
              alt="my resume"
              styleClass={`${iconSize} light-icon `}
            />
            <ImgStyle
              src={resumeDark}
              alt="my resume"
              styleClass={`${iconSize} dark-icon `}
            />
          </a>
          <SubText text="resume" side="left" />
        </span>
        <span className="gr-icon flex-column">
          <a
            href="https://github.com/Eli032501"
            target="_blank"
            rel="noreferrer"
            className="flex-column"
          >
            <ImgStyle
              src={social1}
              alt="my github"
              styleClass={`${iconSize} light-icon `}
            />
            <ImgStyle
              src={social1Dark}
              alt="my github"
              styleClass={`${iconSize} dark-icon `}
            />
          </a>
          <SubText text="github" side="right" />
        </span>
        <span className="gr-icon flex-column">
          <a
            href="https://pt.linkedin.com/in/elianapereira-dev"
            target="_blank"
            rel="noreferrer"
          >
            <ImgStyle
              src={social2}
              alt="my linkedin"
              styleClass={`${iconSize} light-icon `}
            />
            <ImgStyle
              src={social2Dark}
              alt="my linkedin"
              styleClass={`${iconSize} dark-icon `}
            />
          </a>
          <SubText text="linkedin" side="left" />
        </span>
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
