import React from "react";
import md from './images/md.png';
import BackButton from "./BackButton";
import "./MountainDew.css";

function MountainDew() {
  return (
    <div>
      <h1>Green Machine!</h1>
      <img src={md} alt="MD" className="MD-img"/>
      <BackButton />
    </div>
  );
}

export default MountainDew;