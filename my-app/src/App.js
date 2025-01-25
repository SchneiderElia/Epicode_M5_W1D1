import logo from './logo.svg';
import './App.css';

import './style.css'
import Saluto from './Saluto'
import {H2, H3, P} from './contentPage'
import RadioSelect from './RadioSelect'



function App() {
  return (
     <div className="App">
      <div className='text'>
       <H2 quest='1. Cos’è ReactJS?'></H2>
       <P reply='Reacy è una libreria JavasScriptche usa JSX come formato di input nella quale si puo lavorare con dei framework'></P>

       <H2 quest='ReactJS è un framework, non una libreria.'></H2>
       <P reply='Falso react e una libreria'></P>

       <H2 quest=' Il file package.json contiene? (seleziona la risposta corretta)'></H2>
       <RadioSelect select='Informazioni non essenziali, può essere tranquillamente eliminato'></RadioSelect>
       <RadioSelect select='Solamente il nome e la versione dell’applicazione'></RadioSelect>
       <RadioSelect select='Molte informazioni utili, come ad esempio l’elenco di tutte le dipendenze richieste  (QUESTA)'></RadioSelect>
       <RadioSelect select='Il primo componente React caricato all’avvio'></RadioSelect>

       <H2 quest='Create-react-app è l’unico modo possibile per creare un’applicazione React.'></H2>
       <P reply='Falso ma e il template di base per principiante 
       si puo creare una React app anche con Vite, Next.js, Gastby oppure configurarlo manualmente'></P>

       

     

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
