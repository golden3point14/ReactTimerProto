import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <Timer hours= {12} minutes={5} seconds={33} isRunning={true}/>
    );
  }
}

class TimerBlock extends Component {
  constructor (){
    super();
    //array of total times per timer
    //array of current timers per timer
  }
}

class Timer extends Component {
  render() {
    const zero = "0";
    var hours = this.props.hours < 10 ? zero + this.props.hours : this.props.hours
    var minutes = this.props.minutes < 10 ? zero + this.props.minutes : this.props.minutes
    var seconds = this.props.seconds < 10 ? zero + this.props.seconds : this.props.seconds
    return (
      <div> {hours + ":" + minutes + ":" + seconds} </div>
    );
  }
}


export default App;
