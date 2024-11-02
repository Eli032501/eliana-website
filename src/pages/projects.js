import React from "react";
import "./projects.css";
import prj1 from "../assets/pr1.png";
// import prj2 from "../assets/pr2.png";
import ImgStyle from "../components/ImgStyle";
import Footer from "../components/Footer";
import SubText from "../components/SubText";
export default function Projects() {
  return (
    <div className="Projects ">
      <span className="wrapper">
        <span className="subtext-grid">
          <SubText text="click here to check it out" side=" down" />
        </span>
        <a
          className="grid-img"
          href="https://react-weather-forecast-eli.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <ImgStyle alt="test" src={prj1} styleClass="portrait prj-img" />
        </a>
        <h2 className="title-img">weather app</h2>

        <span className="grid-full">
          <h4>React . Bootstrap . API</h4>
          <p>
            Lorem ipsum dolor sit amet. Et asperiores quia non tempora facere
            aut quia molestiae nam maxime voluptates. Aut fuga maiores sed
            itaque velit est quae illo a iusto fugit non quia dolorum.
          </p>
        </span>
        <span className="grid-full">
          <br />
          <br />
          <Footer iconDisplay="flex-row" iconSize="footer-icon" />
        </span>
      </span>
    </div>
  );
}
