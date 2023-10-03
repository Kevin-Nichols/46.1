import React from "react";
import water from './images/water.png';
import BackButton from "./BackButton";
import "./Water.css";

function Water() {
  return (
    <div>
      <h1>Ultimate Low Calorie!</h1>
      <img src={water} alt="Water" className="Water-img"/>
      <BackButton />
    </div>
  );
}

export default Water;