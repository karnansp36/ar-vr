import React from 'react'

export default function ARMarker() {
  return (
    <div>
      <div style={{margin : '0px', overflow: 'hidden'}}>
        <a-scene embedded arjs>
        <a-marker preset="hiro">
            <a-entity
            position="0 0 0"
            scale="0.05 0.05 0.05"
            gltf-model="../assets/Couch.gltf"
            ></a-entity>
        </a-marker>
        <a-entity camera></a-entity>
        </a-scene>
    </div>
    </div>
  )
}
