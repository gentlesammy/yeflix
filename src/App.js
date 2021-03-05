import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Homescreen from "./components/Homescreen";
import Loginscreen from "./components/Loginscreen";

function App() {
  const user = null;

  return (
    <div className="App">
      <Router>
        {!user || user === null ? (
          <Loginscreen />
        ) : (
          <Switch>
            <Route path="/" exact>
              <Homescreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
