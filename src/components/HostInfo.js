import React, { useState } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo({ updateHost, selectedHost, setSelectedHost, areas, hosts}) {

  const { id, firstName, active, imageUrl, gender, area } = selectedHost
  // This state is just to show how the dropdown component works.
  // Options have to be formatted in this way (array of objects with keys of: key, text, value)
  // Value has to match the value in the object to render the right text.

  // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  // const [options] = useState([
  //   { key: "some_area", text: "Some Area", value: "some_area" },
  //   { key: "another_area", text: "Another Area", value: "another_area" },
  // ]);

  const [options] = useState(areas.map(area => {
    const strArr = area.name.split(/[_]/)
    const areaName = strArr.map(str => str[0].toUpperCase() + str.slice(1)).join(' ')
    return {key: area.name, text: areaName, value: area.name}
  }))

  const [value, setValue] = useState(area);
  
  hosts.map(host => host.id === selectedHost.id ? setSelectedHost(host) : host)

  function handleOptionChange(e, { value }) {
    
    console.log("option change name:", e.target)
    // console.log("option change:", value)
    setValue(value)
    fetch(`http://localhost:3001/hosts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        area: value
      })
    }).then(res => res.json())
      .then(hostData => {
        setSelectedHost(hostData)
        updateHost(hostData)
      })
    
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger or console.log in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }

  function handleRadioChange() {
    // console.log("e.target:", e.target.textContent);
    fetch(`http://localhost:3001/hosts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        active: !active
      })
    }).then(res => res.json())
      .then(hostData => {
        setSelectedHost(hostData)
        updateHost(hostData) 
      })
  }

  console.log("Selected host:", selectedHost);

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {firstName} | {gender==="Male" ? <Icon name="man" /> : <Icon name="woman" />}
              {/* Think about how the above should work to conditionally render the right First Name and the right gender Icon */}
            </Card.Header>
            <Card.Meta>
              {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
              {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
              <Radio
                onChange={handleRadioChange}
                label={active ? "Active" : "Decommissioned"}
                checked={active}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={value}
              name="area"
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
