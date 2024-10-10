// src/components/LandingPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [selectedModel, setSelectedModel] = useState("model1");
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/ar-view/${selectedModel}`);
  };

  return (
    <div className="landing-page">
      <h1>Welcome to AR E-Commerce</h1>

      {/* Model Selection */}
      <label htmlFor="model-select">Choose a model:</label>
      <select
        id="model-select"
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
      >
        <option value="model1">Model 1</option>
        <option value="model2">Model 2</option>
        <option value="model3">Model 3</option>
        <option value="model4">Model 4</option>
        <option value="Couch">Model 5</option>
     
      </select>

      {/* Button to go to AR View */}
      <button onClick={handleButtonClick}>Go to AR View</button>
    </div>
  );
};

export default LandingPage;
