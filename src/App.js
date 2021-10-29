import './App.css';
import {Route} from "react-router-dom";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">

       <Route path='/' component={Main} />
    </div>
  );
}

export default App;
