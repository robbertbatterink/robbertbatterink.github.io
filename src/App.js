import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navibar from './components/Navbar.js';
import Intro from './components/Intro.js';
import Projects from './components/Projects.js';
import Landing from './components/Landing.js';
import Experience from './components/Experience.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App" id="home" style={{paddingTop: '20vh'}}>
        <Navibar />
        <div style={{position: 'relative'}}>
        <Landing />
        <div className="spacer1" id="info"/>
        <Intro />
        <div className="spacer2" id="projects"/>
        <Projects />
        <div className="spacer3" id="experience"/>
        <Experience />
        <div className="spacer4" id="contact"/>
        </div>
        <Footer />
    </div>
  );
}

export default App;
