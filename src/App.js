// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ARView from "./components/ARView";
import "./App.css"
import ARMarker from "./components/ARMarker";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* AR View Page */}
        <Route path="/ar-vr" element={<ARView />} />
        <Route path="/ar" element={<ARMarker />} />

      </Routes>
    </Router>
  );
}

export default App;
