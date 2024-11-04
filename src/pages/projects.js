import React from "react";
import "./projects.css";
import prj1 from "../assets/pr1.png";
import prj2 from "../assets/pr2.png";
import SocialSection from "../components/SocialSection";
import ProjSection from "../components/ProjSection";
export default function Projects() {
  return (
    <div className="Projects ">
      <h1>my projects</h1>

      <ProjSection
        title="weather app"
        subtitle="react . bootstrap . api"
        text="Lorem ipsum dolor sit amet. Et asperiores quia non tempora facere aut quia molestiae nam maxime voluptates. Aut fuga maiores sed itaque velit est quae illo a iusto fugit non quia dolorum."
        img={prj1}
        link="https://react-weather-forecast-eli.netlify.app/"
      />
      <ProjSection
        title="dictionary app"
        subtitle="react . bootstrap . api"
        text="Lorem ipsum dolor sit amet. Et asperiores quia non tempora facere aut quia molestiae nam maxime voluptates. Aut fuga maiores sed itaque velit est quae illo a iusto fugit non quia dolorum."
        img={prj2}
        link="https://react-weather-forecast-eli.netlify.app/"
      />
      <SocialSection iconDisplay="flex-row" iconSize="footer-icon" />
    </div>
  );
}
