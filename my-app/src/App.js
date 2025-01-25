import logo from './logo.svg';
import './App.css';

import './style.css'
import Saluto from './Saluto'
import { H2, H3, P } from './contentPage'
import RadioSelect from './RadioSelect'



function App() {
  return (
    <div className="App">
      <div className='text'>
        <H2 quest='1. Cos’è ReactJS?'></H2>
        <P reply='Reacy è una libreria JavasScriptche usa JSX come formato di input nella quale si puo lavorare con dei framework'></P>

        <H2 quest='2. ReactJS è un framework, non una libreria.'></H2>
        <P reply='Falso react e una libreria'></P>

        <H2 quest='3. Il file package.json contiene? (seleziona la risposta corretta)'></H2>
        <RadioSelect select='Informazioni non essenziali, può essere tranquillamente eliminato'></RadioSelect>
        <RadioSelect select='Solamente il nome e la versione dell’applicazione'></RadioSelect>
        <RadioSelect select='Molte informazioni utili, come ad esempio l’elenco di tutte le dipendenze richieste  (QUESTA)'></RadioSelect>
        <RadioSelect select='Il primo componente React caricato all’avvio'></RadioSelect>

        <H2 quest='4.Create-react-app è l’unico modo possibile per creare un’applicazione React.'></H2>
        <P reply='Falso ma e il template di base per principiante 
       si puo creare una React app anche con Vite, Next.js, Gastby oppure configurarlo manualmente'></P>

        <H2 quest='5. Qual è il comando da lanciare nel terminale per creare una nuova create-react-app con nome “test”?'></H2>
        <P reply='npx create-react-app test'></P>

        <H2 quest='6. Cos’è un componente React?'></H2>
        <P reply='Un blocco di logica/contenuto riutilizzabile all’interno dell’applicazione'></P>

        <H2 quest='7. Un componente React può venire creato in tre modi: come funzione, classe o interfaccia.'></H2>
        <P reply='Falso'></P>

        <H2 quest='8. Le props sono frammenti di informazione assegnati all’invocazione di un componente React, utili al fine di rendere il componente dinamico e più riutilizzabile.'></H2>
        <P reply='Vero'></P>

        <H2 quest='9. Le props possono essere passate solamente da un componente genitore ad un componente figlio, non è possibile fare il contrario.'></H2>
        <P reply='Vero'></P>

        <H2 quest='10. Da dove possono venire recuperate le props all’interno di un componente React creato come classe?'></H2>
        <P reply='Sono proprietà contenute in un oggetto accessibile attraverso i parametri della funzione'></P>
        <P reply='Possono essere recuperate all’interno dello oggetto ‘this’, dentro un sotto-oggetto chiamato ‘props’'></P>

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
