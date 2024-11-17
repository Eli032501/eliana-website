import React from "react";
import "./about.css";
import ListPath from "../components/listPath";
import Header from "../components/Header";
import Skills from "../components/Skills";

import SocialSection from "../components/SocialSection";
export default function About() {
  return (
    <div className="About ">
      <span className="wrapper">
        <Header />
        <span className="grid-content">
          <h3>about me</h3>
          <p>
            I'm 23 years old, very curious, and always eager to learn more. I
            live in Lisbon, Portugal, and am passionate about music, books, and
            travel. Currently, I'm seeking new opportunities in front-end
            development. My coding skills include <strong>React</strong>,
            <strong> Bootstrap</strong> and <strong>API</strong>, and I also
            have knowledge of <strong>UI/UX </strong>design.
          </p>

          <h3>languages</h3>
          <ul className="list-style">
            <li>
              Portuguese - <strong>native</strong>
            </li>

            <li>English - advance</li>
          </ul>
          <h3>skills</h3>
          <Skills />
          <h3>academic path</h3>
          <ul className="list-style">
            <ListPath
              date="2019 - 2022"
              degree="Bachelor's degree in Audiovisual and Multimedia"
              place="School of Communication and Media Studies - Lisbon PI"
              link="https://www.escs.ipl.pt/en/courses/undergraduate/audiovisual-and-multimedia"
            />

            <ListPath
              date="2022 - 2023"
              degree="Web Front-End Specialization Course"
              place="IADE Faculty of Design, Techonology and Communication"
              link="https://www.iade.europeia.pt/programa-especializacao/programacao-web-front-end/"
            />

            <ListPath
              date="2023 - 2024"
              degree="Front-End Diploma - SheCodes"
              place="SheCodes - Online coding workshop"
              link="https://www.shecodes.io/graduates/99142-eliana-pereira"
            />
          </ul>
          <SocialSection iconSize="footer-icon" />
        </span>
      </span>
    </div>
  );
}
