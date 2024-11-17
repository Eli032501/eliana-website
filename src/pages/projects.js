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
        text="I developed this project during the SheCodes React workshop, using my previous knowledge in Bootstrap and responsive design along with my newly acquired skills in React and APIs. The result is a fully functional weather application."
        img={prj1}
        link="https://react-weather-forecast-eli.netlify.app/"
      />
      <ProjSection
        title="dictionary app"
        subtitle="react . API . bootstrap"
        text="During the SheCodes React workshop, I created a fully functional and responsive dictionary app. Utilizing React and integrating two APIs, I built a tool that delivers word meanings, synonyms, phonetics, and related images based on user input."
        img={prj2}
        link="https://dictionary-app-react-eli.netlify.app/"
      />
      <ProjSection
        title="AI Generator"
        subtitle="JS . AI API"
        text="I created these projects to generate personalized movie and TV series recommendations based on specific user instructions. For this, I used an AI API and a Typewriter JS plugin, to enhance the user experience."
        img={prj3}
        link="https://what-to-watch-ai-generator.netlify.app/"
      />

      <SocialSection iconSize="footer-icon" />
    </div>
  );
}
