import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host, setSelectedHost }) {
  /* NOTE: The className "host selected" renders a different style than simply "host". */
  const handleClick = () => {
    setSelectedHost(host)
  }

  return (
    <Card
      className="host"
      onClick={handleClick}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
