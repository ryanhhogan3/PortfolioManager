import React from 'react';
import { Pie } from 'react-chartjs-2';
import './App.css';
import StockList from './components/StockList';
import AnalyticsBoard from './components/Analytics';
//import PieChart from './components/PieChart';
import PieChart from './components/PieChart'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <StockList/>
      <AnalyticsBoard/>

      <h3> Holdings by weight </h3>
      <Pie data={PieChart} />

      </header>
    </div>

  );
}

export default App;
