import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ hosts, host, nonActiveHosts, setSelectedHost }) {
  /* NOTE: The className "host selected" renders a different style than simply "host". */
  const handleClick = () => {
    setSelectedHost(host)
    hosts.forEach(currentHost => {
      if(currentHost.id === host.id) {
        host.authorized = true
      } else {
        currentHost.authorized = false
      }
    })
  }
  
  return (
    <Card
      className={host.authorized ? "host selected" : "host"}
      onClick={handleClick}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
