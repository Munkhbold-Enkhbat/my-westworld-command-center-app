import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host"

function HostList({ hosts, nonActiveHosts, setSelectedHost }) {

  const renderHosts = () => {
    return nonActiveHosts.map(host => {
      return (
        <Host key={host.id} 
          hosts={hosts}
          host={host} 
          nonActiveHosts={nonActiveHosts}
          setSelectedHost={setSelectedHost}
        />)
    })
  }

  return (
    <Card.Group itemsPerRow={6}>
      {renderHosts()}
    </Card.Group>
  );
}

export default HostList;
