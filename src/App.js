import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth } from "./firebase/firebase";
import Homescreen from "./components/Homescreen";
import Loginscreen from "./components/Loginscreen";
import Profilescreen from "./components/Profilescreen";

import { selectUser, logoutUser, loginUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        console.log("onikan", userAuth);
        dispatch(
          loginUser({
            userId: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //user is not logged in
        dispatch(logoutUser());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        {!user || user === null ? (
          <Loginscreen />
        ) : (
          <Switch>
            <Route path="/profile" exact>
              <Profilescreen />
            </Route>
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
