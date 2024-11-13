import React from "react";
import "./projects.css";
import prj1 from "../assets/pr1.png";
import prj2 from "../assets/pr2.png";
import prj3 from "../assets/prj3.png";
import SocialSection from "../components/SocialSection";
import ProjSection from "../components/ProjSection";
export default function Projects() {
  return (
    <div className="Projects ">
      <h1>my projects</h1>

      <ProjSection
        title="weather app"
        subtitle="react . API . bootstrap"
        text="I built this project in SheCodes React workshop. Using my previous knowledge of Bootstrap, and Responsive Development and my recent skills with React and APIs, I created a fully-functioning weather app."
        img={prj1}
        link="https://react-weather-forecast-eli.netlify.app/"
      />
      <ProjSection
        title="dictionary app"
        subtitle="react . API . bootstrap"
        text="While working in SheCodes React workshop I developed a fully functional and responsive dictionary app. Using React and 2 APIs I built an app that provides meanings, synonyms, phonetics, and images of the word provided by the user."
        img={prj2}
        link="https://dictionary-app-react-eli.netlify.app/"
      />
      <ProjSection
        title="AI Generator"
        subtitle="JS . AI API"
        text="I built these projects using AI to generate movie or TV series recommendations that match specific user input. For this project, I used a Typewriter JS plugin and an AI API."
        img={prj3}
        link="https://what-to-watch-ai-generator.netlify.app/"
      />

      <SocialSection iconSize="footer-icon" />
    </div>
  );
}
