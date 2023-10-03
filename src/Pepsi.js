import React from "react";
import pepsi from './images/pepsi.png';
import BackButton from "./BackButton";
import "./Pepsi.css";

function Pepsi() {
  return (
    <div>
      <h1>The Original!</h1>
      <img src={pepsi} alt="Pepsi" className="Pepsi-img"/>
      <BackButton />
    </div>
  );
}

export default Pepsi;