import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navibar from './components/Navbar.js';
import Contact from './components/Contact.js';
import Intro from './components/Intro.js';
import Projects from './components/Projects.js';
import Landing from './components/Landing.js';

function App() {
  return (
    <div className="App" id="home" style={{paddingTop: '20vh'}}>
        <Navibar />
        <div style={{position: 'relative'}}>
        <Landing />
        <div className="spacer1" id="info"/>
        <Intro />
        <div className="spacer2"/>
        <Projects />
        <div className="spacer3"/>
        <Contact />
        <div className="spacer2"/>
        </div>
      <header className="App-header">
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
      </header>

      <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
    </div>
  );
}

export default App;
