import React from "react";
import "./about.css";
import ListPath from "../components/listPath";
import Header from "../components/Header";

import SocialSection from "../components/SocialSection";
export default function About() {
  return (
    <div className="About ">
      <span className="wrapper">
        <Header />
        <span className="grid-content">
          <h3>about me</h3>
          <p>
            Lorem ipsum dolor sit amet. Et asperiores quia non tempora facere
            aut quia molestiae nam maxime voluptates. Aut fuga maiores sed
            itaque velit est quae illo a iusto fugit non quia dolorum. Ut magnam
            sint qui iste sequi et enim laborum est neque nisi sed esse quaerat!
          </p>
          <br />
          <h3>languages</h3>
          <ul className="list-style">
            <li>
              Portuguese - <strong>native</strong>
            </li>
            <li>English - advance</li>
          </ul>
          <br />

          <h3>academic path</h3>
          <ul className="list-style">
            <ListPath
              date="2019 - 2022"
              degree="Bachelor's degree in Audiovisual and Multimedia"
              place="School of Communication and Media Studies - Lisbon PI"
              link="https://www.escs.ipl.pt/en"
            />
            <br />
            <ListPath
              date="2022 - 2023"
              degree="Web Front-End Specialization Course"
              place="IADE Faculty of Design, Techonology and Communication"
              link="https://www.iade.europeia.pt/en/iade/"
            />
            <br />
            <ListPath
              date="2023 - 2024"
              degree="Front-End Diploma - SheCodes"
              place="SheCodes - Online coding workshop"
              link="https://www.shecodes.io/"
            />
          </ul>
        </span>
      </span>
      <SocialSection iconDisplay="flex-row" iconSize="footer-icon" />
    </div>
  );
}
