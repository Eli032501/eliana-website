import React from "react";

export default function ListPath({ date, degree, place }) {
  return (
    <li className="ListPath">
      <h4 className="path-date">{date}</h4>
      <p className="path-degree">{degree}</p>
      <p className="path-place">{place} </p>
    </li>
  );
}
