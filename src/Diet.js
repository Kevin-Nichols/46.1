import React from "react";
import diet from './images/diet.png';
import BackButton from "./BackButton";
import "./Diet.css";

function Diet() {
  return (
    <div>
      <h1>Staying Low Calorie!</h1>
      <img src={diet} alt="Diet-Pepsi" className="Diet-img"/>
      <BackButton />
    </div>
  );
}

export default Diet;