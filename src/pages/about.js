import React from "react";
import "./about.css";
import ListPath from "../components/listPath";
import ImgStyle from "../components/ImgStyle";
import img1 from "../assets/test1.jpeg";
import Footer from "../components/Footer";
export default function About() {
  return (
    <div className="About ">
      <span className="wrapper">
        <ImgStyle alt="test" src={img1} styleClass="portrait" />

        <h2 className="title-img">eliana pereira</h2>

        <span className="grid-full">
          <h3>about me</h3>
          <p>
            Lorem ipsum dolor sit amet. Et asperiores quia non tempora facere
            aut quia molestiae nam maxime voluptates. Aut fuga maiores sed
            itaque velit est quae illo a iusto fugit non quia dolorum. Ut magnam
            sint qui iste sequi et enim laborum est neque nisi sed esse quaerat!
          </p>
        </span>
        <span className="grid-full">
          <h3>languages</h3>
          <ul className="list-style">
            <li>
              Portuguese - <strong>native</strong>
            </li>
            <li>English - advance</li>
          </ul>
        </span>
        <span className="grid-full">
          <h3>academic path</h3>
          <ul className="list-style">
            <ListPath
              date="2019 - 2022"
              degree="Bachelor's degree in Audiovisual and Multimedia"
              place="School of Communication and Media Studies - Lisbon Polytechnic Institute"
            />
            <ListPath
              date="2022 - 2023"
              degree="Web Front-End Specialization Course"
              place="IADE Faculty of Design, Techonology and Communication"
            />
            <ListPath
              date="2023 - 2024"
              degree="Front-End Diploma - SheCodes"
              place="SheCodes - Online coding workshop"
            />
          </ul>
          <br />
          <Footer iconDisplay="flex-row" iconSize="footer-icon" />
        </span>
      </span>
    </div>
  );
}
