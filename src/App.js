import First from "./first/right/index";
import Second from "./second/index";
import Navabr from "./navabr";
import Three from "./three/index";
import Forth from './forth/index'
import Five from "./five/index"
import Six from "./six/index"
import {BrowserRouter} from 'react-router-dom';


function App() {
  
  return (
    <BrowserRouter >
      <header >
        <Navabr/>
      </header>
      <div>
        <First/>
      </div>
      <div>
        <Second/>
      </div>
      <div  >
        <Three />
      </div>
      <div  >
        <Forth/>
      </div>
      <div>
        <Five />
      </div>
      <div>
        <Six />
      </div>
    </BrowserRouter>
  );
}


export default App;
