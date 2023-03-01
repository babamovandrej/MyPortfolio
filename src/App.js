import React from 'react';
import './App.css';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Folder from './components/ProjectsFolder';
import AboutFolder from './components/AboutFolder';

function App() {
  return (
    <div className="App">
      <Background/>
      <div className='App-window'>
        <Navbar/>
        <Folder/>
        <AboutFolder/>
      </div>
    </div>
  );
}

export default App;
