import React from "react";
import { Link } from 'react-router-dom';
import machine from './images/machine.png';
import "./VendingMachine.css"

function VendingMachine() {
  return (
    <div>
      <h1>Choose a Drink</h1>
      <div className="machine">
        <img src={machine} alt="Vending-Machine" className="machine-img" />
        <div className="diet-1">
          <Link to="diet" className="x">X</Link>
        </div>
        <div className="diet-2">
          <Link to="diet" className="x">X</Link>
        </div>
        <div className="diet-3">
          <Link to="diet" className="x">X</Link>
        </div>
        <div className="diet-4">
          <Link to="diet" className="x">X</Link>
        </div>

        <div className="pepsi-1">
          <Link to="pepsi" className="x">X</Link>
        </div>
        <div className="pepsi-2">
          <Link to="pepsi" className="x">X</Link>
        </div>
        <div className="pepsi-3">
          <Link to="pepsi" className="x">X</Link>
        </div>
        <div className="pepsi-4">
          <Link to="pepsi" className="x">X</Link>
        </div>

        <div className="water-1">
          <Link to="water" className="x">X</Link>
        </div>
        <div className="water-2">
          <Link to="water" className="x">X</Link>
        </div>

        <div className="md-1">
          <Link to="mountain-dew" className="x">X</Link>
        </div>
        <div className="md-2">
          <Link to="mountain-dew" className="x">X</Link>
        </div>

      </div>
    </div>
  );
}

export default VendingMachine;