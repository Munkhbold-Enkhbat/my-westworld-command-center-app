import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host"

function HostList({ nonActiveHost, setSelectedHost }) {

  const renderHosts = () => {
    return nonActiveHost.map(host => {
      return (
        <Host 
          key={host.id} 
          host={host} 
          nonActiveHost={nonActiveHost}
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
