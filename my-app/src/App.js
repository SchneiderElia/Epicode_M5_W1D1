import logo from './logo.svg';
import './App.css';

import './style.css'
import Saluto from './Saluto'
import {H2, H3, P} from './contentPage'


function App() {
  return (
     <div className="App">
      <div className='text'>
       <H2 quest='1. Cos’è ReactJS?'></H2>
       <P reply='hello'></P>

      </div>
        <header className="App-header">
        <h1>REACT</h1>
          <H3 text='W1D1 - Pratica'></H3>
          <img src={logo} className="App-logo" alt="logo" />
          <Saluto nome='Elia ' cognome='Schneider'></Saluto>
        </header>
      </div>


  );
}

export default App;
