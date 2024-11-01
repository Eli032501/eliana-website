import React from "react";
import "./SubText.css";

export default function SubText({ text, side }) {
  return (
    <div className={`${side} SubText `}>
      <span class="material-symbols-outlined">switch_access_shortcut</span>
      <p>{text}</p>
    </div>
  );
}
