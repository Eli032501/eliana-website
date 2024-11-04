import React from "react";

export default function ListPath({ date, degree, place, link }) {
  return (
    <li className="ListPath">
      <h4 className="path-date">{date}</h4>
      <div>
        <p className="path-degree">{degree}</p>
        <a href={link} target="_blank" rel="noreferrer" className="path-place">
          {place}
        </a>
      </div>
    </li>
  );
}
