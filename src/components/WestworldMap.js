import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area"

function WestworldMap({ areas, activeHosts }) {

  const renderAreas = () => {
    return areas.map(area => {
      // console.log(area);
      let areaHosts = activeHosts.filter(host => host.area === area.name)
      return <Area key={area.id} area={area} areaHosts={areaHosts}/>
    })
  }

  return <Segment id="map">{renderAreas()}</Segment>;
}

export default WestworldMap;
