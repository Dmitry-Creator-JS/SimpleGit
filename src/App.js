import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./components/main/Main";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/card:/userName/:repoName/" component={Card} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
