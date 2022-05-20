import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";

function Headquarters({ hosts, setHosts, selectedHost, setSelectedHost }) {
  console.log("Selected Host from HQ:", selectedHost);
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
        <Details selectedHost={selectedHost}/>
      </Grid.Column>
      <Grid.Column width={3}>
        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
