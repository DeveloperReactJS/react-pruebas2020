import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function App(){
  return(
    <div>
        <h1>  Hola beddoar</h1> 
    </div>
  );

}

render(<App />, document.getElementById('root'));
