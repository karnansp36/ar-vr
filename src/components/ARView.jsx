// src/components/ARView.jsx
import React from "react";
import "aframe";
const ARView = ({ modelName }) => {
    const modelUrl = `/Assets/${modelName}.gltf`;
  
    return (
      <div>
        <a-scene
          embedded
          arjs="sourceType: image; debugUIEnabled: false;"
        >
          <a-nft
            type="nft"
            url="../Assets/pattern-marker.patt"
            smooth="true"
            smoothCount="10"
            smoothTolerance="0.01"
            smoothThreshold="5"
          >
            <a-entity
              gltf-model={modelUrl}
              scale="0.5 0.5 0.5"
              position="0 0 0"
            ></a-entity>
          </a-nft>
  
          <a-entity camera></a-entity>
        </a-scene>
      </div>
    );
  };
  

export default ARView;
