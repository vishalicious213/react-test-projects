import React from 'react';
import logo from '../logo.svg';

function Home() {
  return (
    <div>
        <h1 id='title'>REACT TEST PROJECTS</h1>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p id='subtitle'>Experiments with forms, state-controlled inputs and form validation</p>
    </div>
  );
}

export default Home;