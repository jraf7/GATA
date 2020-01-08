import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Profile from "./Pages/Profile";

function App () {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/main" component={Main}/>
          <Route exact path="/profile" component={Profile}/>
        </Switch>
      </div>
    </Router>

  )
}

export default App;