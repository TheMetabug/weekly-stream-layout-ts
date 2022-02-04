import React from 'react';
import Players from './Components/Player/Players';
import PlayerData from './Models/playerData';
import './App.css';

const DUMMY_DATA = [new PlayerData(1), new PlayerData(2)]

function App() {
  return (
    <div className="main-content">
      <Players playerList={DUMMY_DATA} />
    </div>
  );
}

export default App;
