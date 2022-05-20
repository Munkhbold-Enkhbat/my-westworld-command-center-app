import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area"

function WestworldMap({ areas }) {

  const renderAreas = () => {
    return areas.map(area => {
      return <Area key={area.id} area={area}/>
    })
  }

  return <Segment id="map">{renderAreas()}</Segment>;
}

export default WestworldMap;
