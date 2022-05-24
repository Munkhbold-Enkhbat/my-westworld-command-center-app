import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters";

function App() {

  const [areas, setAreas] = useState([])
  const [hosts, setHosts] = useState([])
  const [selectedHost, setSelectedHost] = useState(null)  

  let activeHosts = []
  let nonActiveHosts = []
  // if(isAllActive) {
  //   hosts.map(host => (host.active = true))
  // }
  // isAllActive ? hosts.map(host => (host.active = true) : hosts 

  useEffect(() => {
    fetch('http://localhost:3001/areas')
      .then(res => res.json())
      .then(areaData => setAreas(areaData))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/hosts')
      .then(res => res.json())
      .then(hostsData => setHosts(hostsData))
  }, [])

  hosts.forEach(host => host.active ? activeHosts = [...activeHosts, host] :
    nonActiveHosts = [...nonActiveHosts, host])

    // console.log("Active hosts:", activeHosts);
    // console.log("Non-Active hosts:", nonActiveHosts);

  function updateHost(updatedHost) {
    // console.log('updatedHost:', updatedHost)
    const updatedHosts = hosts.map(host => host.id === updatedHost.id ? updatedHost : host)    
    setHosts(updatedHosts)
  }

  function handleActivateBtn(e) {
    console.log("Activate Btn:", e.target.textContent)
    if(e.target.textContent === 'ACTIVATE ALL') {
      const activatedOnes = hosts.map(host => host.active === false ? {...host, active: true} : host)
      console.log('activatedOnes:', activatedOnes);
      setHosts(activatedOnes)
    } else {
      const nonActivedOnes = hosts.map(host => host.active === true ? {...host, active: false} : host)
      console.log('nonActivedOnes:', nonActivedOnes);
      setHosts(nonActivedOnes)
    }
  }

  // console.log(hosts);

  return (
    <Segment id="app">
      {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
      <WestworldMap areas={areas} activeHosts={activeHosts}/>
      <Headquarters 
        updateHost={updateHost}
        handleActivateBtn={handleActivateBtn}
        nonActiveHosts={nonActiveHosts} 
        setHosts={setHosts} 
        selectedHost={selectedHost}
        setSelectedHost={setSelectedHost}
        areas={areas}
      />
    </Segment>
  );
}

export default App;
