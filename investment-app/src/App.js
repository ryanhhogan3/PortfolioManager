import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { sortStocksbyName } from './helper';
import StockList from './components/StockList';
import HoldingsList from './components/HoldingsList';
import AnalyticsBoard from './components/Analytics';



function App() {
  return (

 
    <div className="App">
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
        <StockList 
          
        />
        <AnalyticsBoard/>
      </header>
    </div>

  );
}

export default App;
