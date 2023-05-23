//import logo from './logo.svg';
import './App.css';
import Labs from "./labs";
import Tuiter from "./tuiter";
import HelloWorld from "./labs/a3/hello-world";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <HelloWorld/>
                <Labs/>
                <Tuiter/>
            </div>

        </BrowserRouter>


    );
}

export default App;

/*function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;*/
