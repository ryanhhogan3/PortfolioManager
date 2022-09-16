import './App.css';
import React from 'react';
import JsonData from "./components/data.json"
import AnalyticsBoard from './components/Analytics';
import PieChart from './components/PieChart'
import { Pie } from 'react-chartjs-2';
import PieChartOptions from './components/PieChartOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>
          Oregon State Investment Group
        </h1>
               
      <AnalyticsBoard/>

      <h3> Holdings by weight </h3>
      <div id = "pieChart"> 
        <Pie
        data={PieChart}
        options={PieChartOptions}/>
      </div>
      </header>
    </div>

  );
}

export default App;