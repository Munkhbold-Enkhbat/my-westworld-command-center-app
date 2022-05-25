import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel";

function Headquarters({ updateHost, handleActivateBtn, nonActiveHosts, hosts, setHosts, areas, selectedHost, setSelectedHost }) {

  const handleSelectHost = (hostObj) => {
    const foundHost = hosts.map(host => host.id = hostObj.id)
    setSelectedHost(foundHost)
  }
 
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
          updateHost={updateHost}
          handleSelectHost={handleSelectHost}
          areas={areas}
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel handleActivateBtn={handleActivateBtn}/>
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
