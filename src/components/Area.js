import React from "react";
import "../stylesheets/Area.css";
import Host from "./Host";

function Area({ area, areaHosts }) {
  const strArr = area.name.split(/[_]/)
  const areaName = strArr.map(str => str[0].toUpperCase() + str.slice(1)).join(' ')

  const renderHosts = () => {
    return areaHosts.map(host => {
      return (
        <Host 
          key={host.id}
          areaHosts={areaHosts}
        />)
    })
  }
  
  return (
    <div className="area" id={area.name}>
      <h3 className="labels">
        {areaName}
      </h3>
      {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}
      {renderHosts()}
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
