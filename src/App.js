import React, { Component } from 'react';

// Components
import Battery from './Components/Battery'
import CustomInput from './Components/CustomInput'
import InfoBox from './Components/InfoBox'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    //Centralized State
    this.state = {
      powerLevel : 0,
      alertText: "",
      color: "79C201"
    }

    //Bind methods
    this.updatePowerLevel = this.updatePowerLevel.bind(this);
  }

  updatePowerLevel (val) {
    if(val < 0) {
      this.setState({
        powerLevel : 0,
        alertText : "Power level cannot be less than 0%",
        color: "#79C201"
      }); 
    } else if ( val >= 0 && val <= 14 ) {
      this.setState({
        powerLevel : val,
        alertText: "",
        color: "red"
      }); 
    } else if ( val >= 15 && val <= 39 ) {
      this.setState({
        powerLevel : val,
        alertText: "",
        color : "#F5DC1F"
      }); 
    }  else if ( val >= 40 && val <=100 ) {
      this.setState({
        powerLevel : val,
        alertText: "",
        color: "#79C201"
      }); 
    } else {
      this.setState({
        powerLevel : 100,
        alertText : "Power level cannot exceed 100%",
        color: "#79C201"
      }); 
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dynamic Battery Status</h1>
          <Battery powerLevel = {this.state.powerLevel} batteryColor = {this.state.color}/>
        </header>
        <div className="App-intro">
          <CustomInput updatePowerLevel = {this.updatePowerLevel}/>
        </div>
        <div className="App-info">
          <InfoBox alertText = {this.state.alertText}/>
        </div> 
      </div>
    );
  }
}

export default App;
