// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ARView from "./components/ARView";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* AR View Page */}
        <Route path="/ar-view/:modelName" element={<ARView />} />
      </Routes>
    </Router>
  );
}

export default App;
