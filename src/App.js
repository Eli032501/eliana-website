import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import Projects from "./pages/projects";
import Layout from "./Layout";

function App() {
  return (
    <div className="App" id="myApp">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Router>

      <p className="footer">
        Eliana Pereira 2024 -{" "}
        <a
          href="https://github.com/Eli032501/eliana-website"
          target="_blank"
          rel="noreferrer"
        >
          open source
        </a>{" "}
        website
      </p>
    </div>
  );
}

export default App;
