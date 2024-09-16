import React from "react";
import ReactPannellum, { getConfig } from "react-pannellum";
import panoImage from './assets/sciencecenter.png';

class App extends React.Component {
  click() {
    console.log(getConfig());
  }

  render() {
    const config = {
      // autoRotate: -2,
      autoLoad: true,
    };

    const equirectangularOptions = {
      haov: 360,
      vaov: 70, 
    }

    return (
      <div>
        <ReactPannellum
          id="1"
          sceneId="firstScene"
          style={{ width: "100vw", height: "100vh" }}
          imageSource={panoImage}
          config={config}
          equirectangularOptions={equirectangularOptions}
        />
        <div onClick={this.click}>Click me</div>
      </div>
    );
  }
}

export default App;
