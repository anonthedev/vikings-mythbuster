import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Myths from './Components/Myths/Myths'
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/myths">
            <Myths />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;