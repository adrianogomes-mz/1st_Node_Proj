//import React, {useState} from 'react';
import React from 'react';

import './global.css';

//import Logon from './pages/Logon';

//Routes é componente
import Routes from './routes';
import { Route } from 'react-router-dom';

//Quando html está dentro de js chama-se JSX - JavaScript XML. Componente é uma função que retorna html
function App() {
  //Implementando Estado, Variável que vai guardar dados e renderizar na pág
  //const [counter, setCounter] = useState(0);

  //useState retorna um array com 2 posições. Array[valor, funcaoAtualizacao]

 // function increment() {
 //   setCounter(counter + 1);

    //console.log(counter);
 // }


  return (
  //<Header>
  //  Semana Omnistack
  //</Header>

  //<div>
 //   <Header> Contador: {counter} </Header>
 //   <button onClick = {increment}> Incrementar </button>
 // </div>

 //<Logon />

 <Routes />
  );
}

export default App;
