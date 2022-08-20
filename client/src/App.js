import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import './App.css';
import PlayeTwoForm from './components/Header/PlayeTwoForm';
import PlayerOneForm from './components/Header/PlayerOneForm';
import GameLogic from './components/Game/Board/Board';

function App() {
  return (
    <div className="App">
      <div className="playersforms">
        <PlayerOneForm />
        <PlayeTwoForm />
      </div>
      <div>
        <GameLogic />
      </div>
    </div>
  );
}

export default App;
