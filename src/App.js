import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import Projects from "./pages/projects";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
