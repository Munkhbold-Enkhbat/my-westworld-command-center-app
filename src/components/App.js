import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters";

function App() {

  const [areas, setAreas] = useState([])
  const [hosts, setHosts] = useState([])
  const [selectedHost, setSelectedHost] = useState(null)
  const [isAllActive, setIsAllActive] = useState(false)

  let activeHosts = []
  let nonActiveHosts = []

  isAllActive ? hosts.map(host => host.active = true) : hosts.map(host => host.active = false)

  hosts.forEach(host => host.active ? activeHosts = [...activeHosts, host] :
    nonActiveHosts = [...nonActiveHosts, host])

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

  return (
    <Segment id="app">
      {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
      <WestworldMap areas={areas} activeHosts={activeHosts}/>
      <Headquarters 
        nonActiveHosts={nonActiveHosts} 
        setHosts={setHosts} 
        selectedHost={selectedHost}
        setSelectedHost={setSelectedHost}
        areas={areas}
        isAllActive={isAllActive}
        setIsAllActive={setIsAllActive}
      />
    </Segment>
  );
}

export default App;
