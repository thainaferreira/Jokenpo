import './App.css';
import { useState } from 'react';
import Score from './components/Score'
import Play from './components/Play'
import Victory from './components/Victory'
import Result from './components/Result'
import personagens from './assets/img/personagens.png'

function App() {
  const [score, setScore] = useState({user: 0, pc: 0, condition:""})
  const [choice, setChoice] = useState({user: 0, pc: 0})
  
  return (
    <div className="App">
      <header className="App-header">
        <Victory score={ score.condition }/>
        <Score score={score}/>
        <Result result={ choice.pc }/>
        <Play score={score} setScore={setScore} choice={choice} setChoice={setChoice}/>
        <img src={personagens} alt="star trek" className="image"/>
      </header>
    </div>
  );
}

export default App;
