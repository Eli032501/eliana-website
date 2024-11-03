import React from "react";
import Footer from "../components/Footer";
import "./contacts.css";

export default function Contacts() {
  return (
    <div className="Contacts">
      <h1>get in touch!</h1>
      <Footer iconDisplay="flex-column" iconSize="contact-icon" />
    </div>
  );
}
