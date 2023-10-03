import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VendingMachine from "./VendingMachine";
import Diet from "./Diet";
import Pepsi from "./Pepsi";
import Water from "./Water";
import MountainDew from "./MountainDew";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/pepsi" element={<Pepsi />} />
          <Route path="/water" element={<Water />} />
          <Route path="/mountain-dew" element={<MountainDew />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
