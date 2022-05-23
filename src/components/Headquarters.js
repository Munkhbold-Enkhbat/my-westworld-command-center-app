import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel";

function Headquarters({ nonActiveHosts, setHosts, selectedHost, setSelectedHost, areas, isAllActive, setIsAllActive }) {

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage 
          nonActiveHosts={nonActiveHosts}
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
        <LogPanel isAllActive={isAllActive} setIsAllActive={setIsAllActive}/>
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
