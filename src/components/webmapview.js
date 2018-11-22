import SceneView from "esri/views/SceneView";
import React from "react";

import Point from 'esri/geometry/Point';
import SpatialReference from "esri/geometry/SpatialReference";

const projection = require("esri/geometry/projection");
const projectionPromise = projection.load();

projectionPromise.then(()=>{
    let point_84 = new Point({
        y: 2886472,
        x: 430735,
        spatialReference: SpatialReference.WGS84
    });
    const outSpatialReference = new SpatialReference({
        wkid: 2437
    });
    const point_2437 = projection.project(point_84,
        outSpatialReference);
    console.log("test", point_2437);
});


export class WebMapComponent extends React.Component {
  componentDidMount() {
    const view = new SceneView({
      map: this.props.webmap,
      container: this.mapDiv
    });
    this.props.onload(view);
  }

  render() {
    return (
      <div className="webmap"
        ref={
          element => this.mapDiv = element
        }>
      </div>
    );
  }
}
