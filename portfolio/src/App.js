import './App.scss';
import React from 'react';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <HomePage /> 
      </div>
    </div>
  );
}

export default App;
