import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from './Containers/Landing/Landing';
import SignIn from './Containers/Form/SignIn';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="container">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/dashboard" component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
