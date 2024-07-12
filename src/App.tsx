import React from 'react';
import logo from './figma.png';
import './App.css';
import HelloMessage from './components/HelloMessage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        <br></br>
        {/*Create the HelloMessage Component passing name as the prop with the value of Zach */}
        <HelloMessage name="Zach"/>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
