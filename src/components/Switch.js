import React, { useState } from "react";
import "../App.css";
export default function Switch() {
  const [themeDark, setThemeDark] = useState(false);

  function buttonSwitch() {
    setThemeDark(!themeDark);
    const myApp = document.getElementById("myApp");
    myApp.classList.toggle("dark");
  }
  return (
    <button id="button-switch" className="dark-mode-btn" onClick={buttonSwitch}>
      {themeDark ? "☾" : "☼"}
    </button>
  );
}
