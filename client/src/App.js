import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Containers/Landing/Landing';
import SignIn from './Containers/Form/SignIn';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <SignIn />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
