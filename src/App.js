/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/pure/greeting";
import GreetingF from "./components/pure/greetingF";
import TaskListComponent from "./components/container/task_list";
import Ejemplo1 from './hooks/Ejemplo1'
import Ejemplo2 from "./hooks/Ejemplo2";
import MiComponenteConContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";
import GreetingStyled from "./components/pure/greetingStyled";
import Father from "./components/container/father";

function App() {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Componente de clase*/}
        {/* <Greeting name="bellakero"></Greeting>*/}
        {/*Componente de funcion*/}
        {/* <GreetingF name={'bellakoso'}></GreetingF> */}
        <TaskListComponent></TaskListComponent>
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2>  */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre='Baute'>
          <h3>Contenido del children</h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name='Baute'></GreetingStyled> */}
        {/* <Father></Father> */}
    </div>
  );
}

export default App;