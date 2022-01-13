import './App.css';

function App() {
  return (
    <div className="container">
      <div id="drum-machine">
        <div className="btn-group">
          <div id="lib1">Library One</div>
          <div id="lib2">Library Two</div>
          <div id="lib3">Library Three</div> 
        </div>
        <div id="display">
          <p id="beat-name">
            Click a <strong>Pad</strong> or press a <strong>Key</strong>
          </p>
        </div>
        <div id="pad-container">
          <div className="drum-pad" id="Q"></div>
          <div className="drum-pad" id="W"></div>
          <div className="drum-pad" id="E"></div>
          <div className="drum-pad" id="A"></div>
          <div className="drum-pad" id="S"></div>
          <div className="drum-pad" id="D"></div>
          <div className="drum-pad" id="Z"></div>
          <div className="drum-pad drum-pad-hover" id="X"></div>
          <div className="drum-pad drum-pad-clicked" id="C"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
