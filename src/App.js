import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth } from "./firebase/firebase";
import "./App.css";
import Homescreen from "./components/Homescreen";
import Loginscreen from "./components/Loginscreen";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        console.log("onikan", userAuth);
      } else {
        //user is not logged in
        console.log("null");
      }
    });
    return unsubscribe;
  }, []);

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
