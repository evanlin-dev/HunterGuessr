import React from "react";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import { LensflarePlugin } from "photo-sphere-viewer-lensflare-plugin";
import "@photo-sphere-viewer/markers-plugin/index.css";
import pinRed from './assets/pin-red.png';
import panoImage from './assets/sciencecenter.png';

function App() {
  const photoSphereRef = React.useRef();

  const handleReady = (instance) => {
    const markersPlugs = instance.getPlugin(MarkersPlugin);
    if (!markersPlugs) return;
    console.log(markersPlugs);
    markersPlugs.addEventListener("select-marker", () => {
      console.log("asd");
    });
  };

  const plugins = [
    [
      MarkersPlugin,
      {
        // list of markers
        markers: [
          {
            // image marker that opens the panel when clicked
            id: "image",
            position: { yaw: "95deg", pitch: "16deg" },
            image: {pinRed},
            anchor: "bottom center",
            size: { width: 32, height: 32 },
            tooltip: "Monte Civetta, Dolomites, Italy",
          },
        ],
      },
    ],
    [
      LensflarePlugin,
      {
        // list of lensflares
        lensflares: [
          {
            id: "sun",
            position: { yaw: "145deg", pitch: "2deg" },
            type: 0,
          },
        ],
      },
    ],
  ];

  return (
    <div className="App">
      <ReactPhotoSphereViewer
        ref={photoSphereRef}
        src={panoImage}
        // defaultZoomLvl={0}
        littlePlanet={true}
        lang={{
          littlePlanetButton: "Little Planet",
        }}
        hideNavbarButton={true}
        height={"100vh"}
        width={"100vw"}
        onReady={handleReady}
        plugins={plugins}
      />
    </div>
  );
}

export default App;
