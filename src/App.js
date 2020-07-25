import React from 'react';
import './App.css';

//Components
import Road from './Components/Road';
import Trees from './Components/Trees';
import Signals from './Components/Signals';
import Footpath from './Components/Footpath';
import Moon from './Components/Moon';
import Male from './Components/Male';
import Female from './Components/Female';
import Signal2 from './Components/Signal2';

function App() {
  return (
    <div className='container' >
      <Road/>
      <Trees/>
      <Signals/>
      <Signal2/>
      <Footpath/>
      <Male/>
      <Female/>
      <Moon/>
    </div>
  );
}

export default App;
