import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { sortStocksbyName } from './helper';
import StockList from './components/StockList';
import AnalyticsBoard from './components/Analytics';



function App() {
  return (

 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <h1>
          Oregon State Investment Group
        </h1>
          

        
        <AnalyticsBoard/>
      </header>
    </div>

  );
}

export default App;
