import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      power: true,
      input: '',
      volume: 1.0,
      Q: false,
      W: false,
      E: false,
      A: false,
      S: false,
      D: false,
      Z: false,
      X: false,
      C: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.togglePower = this.togglePower.bind(this);
    this.handleSlide = this.handleSlide.bind(this);

    this.drumKey = {
      Q: "Clap",
      W: "",
      E: "",
      A: "",
      S: "",
      D: "",
      Z: "",
      X: "",
      C: ""
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  componentDidUnmount() {
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  handleMouseDown(key) {
    if (this.state.power) {
      this.setState({
        input: this.drumKey[key],
        [key]: true
      });
      document.getElementById(key).volume = this.state.volume;
      document.getElementById(key).pause();
      document.getElementById(key).currentTime = 0;
      document.getElementById(key).play();
    } else {
      this.setState({
        input: "Power is off"
      });
    }
  }

  handleMouseUp(event) {
    this.setState({
      Q: false,
      W: false,
      E: false,
      A: false,
      S: false,
      D: false,
      Z: false,
      X: false,
      C: false
    })
  }

  handleKeyPress(event) {
    if (this.state.power) {
      const keyTest = /[QWEASDZXC]/.test(event.key);
      if (keyTest) {
        this.setState({
          input: this.drumKey[event.key],
          [event.key]: true
        });
        document.getElementById(event.key).pause();
        document.getElementById(event.key).currentTime = 0;
        document.getElementById(event.key).play();
      }
    }
  }

  togglePower() {
    this.setState({
      power: !this.state.power,
      input: this.state.power ? "Power is OFF" : "Power is ON"
    });
  }

  handleSlide(event) {
    this.setState({
      volume: event.target.value / 10
    })
  }

  handleKeyUp(event) {
    this.setState({
      Q: false,
      W: false,
      E: false,
      A: false,
      S: false,
      D: false,
      Z: false,
      X: false,
      C: false
    });
  }

  render() {
    
  }

}

export default App;
