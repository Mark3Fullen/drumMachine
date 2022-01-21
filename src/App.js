import React, {useState, useEffect} from 'react';
import './App.css';

const snareSound = "https://freewavesamples.com/files/Ensoniq-ESQ-1-Snare.wav"

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {

      playing ? audio.play() && console.log("Bruh") : audio.pause();

    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};  

function App() {
  return (
    <div className="container">
      <header>
        DruMachine 1.0!
      </header>
      <div className="container-player">
        {Player(snareSound)}
      </div>
    </div>
  );
}

export default App;
