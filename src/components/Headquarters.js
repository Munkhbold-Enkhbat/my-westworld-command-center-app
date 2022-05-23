import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel";

function Headquarters({ hosts, setHosts, selectedHost, setSelectedHost, areas }) {
  // console.log("Selected Host from HQ:", selectedHost);

  const [activateAll, setActivateAll] = useState(false)

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage 
          hosts={hosts}
          setHosts={setHosts} 
          selectedHost={selectedHost}
          setSelectedHost={setSelectedHost}
        />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details 
          selectedHost={selectedHost} 
          setSelectedHost={setSelectedHost}
          areas={areas}
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel activateAll={activateAll} setActivateAll={setActivateAll}/>
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
