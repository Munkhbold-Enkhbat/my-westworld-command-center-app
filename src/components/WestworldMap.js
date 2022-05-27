import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area"

function WestworldMap({ areas, activeHosts, selectedHost, setSelectedHost }) {

  const renderAreas = () => {
    return areas.map(area => {
      let areaHosts = activeHosts.filter(host => host.area === area.name)
      return (
        <Area 
          key={area.id} 
          area={area} 
          areaHosts={areaHosts}
          selectedHost={selectedHost} 
          setSelectedHost={setSelectedHost}
        />
      )
    })
  }

  return <Segment id="map">{renderAreas()}</Segment>;
}

export default WestworldMap;
