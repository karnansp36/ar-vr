import React from "react";

export default function ARView() {
  return (
    <div>
      <div style={{margin : "0px", overflow: "hidden"}}>
        <div className="arjs-loader">
          <div>Loading, please wait...</div>
        </div>

        <a-scene
          vr-mode-ui="enabled: false;"
          renderer="logarithmicDepthBuffer: true;"
          embedded
          arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
        >
          <a-nft
            type="nft"
            url="../assets/image1.png"
            smooth="true"
            smoothCount="10"
            smoothTolerance=".01"
            smoothThreshold="5"
          >
            <a-entity
              gltf-model="../assets/model2.gltf"
              scale="5 5 5"
              position="50 150 0"
            ></a-entity>
          </a-nft>
          <a-entity camera></a-entity>
        </a-scene>
      </div>
    </div>
  );
}
