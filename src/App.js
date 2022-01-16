import './App.css';

let bpm = 100
let notes = 16
let rows = 5

const calculateBPM = () => {
  return Math.round( ( (44100/60) / (bpm/notes) ) / notes )
}

function App() {
  return (
    <div className="container">
      <header>
        <button id="play-pause" data-playing="false">
          <i className="fa fa-play"></i>
        </button>
      </header>
      <div className="container player"></div>
      <audio id="1"></audio>
      <audio id="2"></audio>
      <audio id="3"></audio>
      <audio id="4"></audio>
      <audio id="5"></audio>
    </div>
  );
}

export default App;
