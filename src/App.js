import React, { Component } from 'react';
import './App.css';
import loop1 from "./soundPack/Loop1.wav";
import loop2 from "./soundPack/Loop2.wav";
import loop3 from "./soundPack/Loop3.wav";
import snare from "./soundPack/Snare.wav";
import kick from "./soundPack/Kick.wav";

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
      Q: "Loop 1",
      W: "Loop 2",
      E: "Loop 3",
      A: "Kick",
      S: "Snare",
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

  componentWillUnmount() {
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

  handleKeyPress(event) {
    let letter = event.key.toUpperCase();
    if (this.state.power) {
      const keyTest = /[QWEASDZXC]/.test(letter);
      if (keyTest) {
        console.log("Bruh")
        this.setState({
          input: this.drumKey[letter],
          [letter]: true
        });
        document.getElementById(letter).volume = this.state.volume;
        document.getElementById(letter).pause();
        document.getElementById(letter).currentTime = .1;
        document.getElementById(letter).play();
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

  render() {
    return (

      <div className="App" id="drum-machine">

        <div className="header">
          <button type="button" className="power-btn" onClick={this.togglePower} style={this.state.power ? {backgroundColor: "#2ec4b6"} : {backgroundColor: "#ff3366"}}>
            {this.state.power ? "ON" : "OFF"}
          </button>
          <div className="display" id="display">
            <p>{this.state.input}</p>
          </div>
        </div>

        <div className="drum-pad-container">
          <div className={"drum-pad active-" + this.state.Q} onMouseDown={() => {this.handleMouseDown("Q")}} onMouseUp={this.handleMouseUp} id="dp-Q">
            Q
            <audio src={loop1} className="loop1" id="Q" preload="auto" volume={this.state.volume}/>
          </div>
          <div className={"drum-pad active-" + this.state.W} onMouseDown={() => {this.handleMouseDown("W")}} onMouseUp={this.handleMouseUp} id="dp-W">
            W
            <audio src={loop2} className="loop2" id="W" preload="auto" volume={this.state.volume}/>
          </div>
          <div className={"drum-pad active-" + this.state.E} onMouseDown={() => {this.handleMouseDown("E")}} onMouseUp={this.handleMouseUp} id="dp-E">
            E
            <audio src={loop3} className="loop3" id="E" preload="auto" volume={this.state.volume}/>
          </div>
          <div className={"drum-pad active-" + this.state.A} onMouseDown={() => {this.handleMouseDown("A")}} onMouseUp={this.handleMouseUp} id="dp-A">
            A
            <audio src={kick} className="kick" id="A" preload="auto" volume={this.state.volume}/>
          </div>
          <div className={"drum-pad active-" + this.state.S} onMouseDown={() => {this.handleMouseDown("S")}} onMouseUp={this.handleMouseUp} id="dp-S">
            S
            <audio src={snare} className="snare" id="S" preload="auto" volume={this.state.volume}/>
          </div>
        </div>

        <div className="slider-container">
          <label htmlFor="volume">Volume</label>
          <input className="slider" type="range" id="start" name="volume" min="0" max="10" onChange={this.handleSlide} />
        </div>

      </div>
    )
  }

}

export default App;
