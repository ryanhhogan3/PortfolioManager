import React from 'react';
import { Pie } from 'react-chartjs-2';
import './App.css';
import StockList from './components/StockList';
import AnalyticsBoard from './components/Analytics';
//import PieChart from './components/PieChart';
import PieChart from './components/PieChart'
import ScatterChart from './components/ScatterChart';
import ScatterChartOptions from './components/ScatterChartOptions';

//import StockList from './components/StockList';

import BarChart from './components/BarChart'
import { Bar } from 'react-chartjs-2';
import { Scatter } from 'react-chartjs-2';
import PieChartOptions from './components/PieChartOptions.js';
import BarChartOptions from './components/BarChartOptions.js';
import Collapsible from './components/CollapseStockList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Oregon State Investment Group</h1>

      <AnalyticsBoard/>

      <h3> Holdings by weight </h3>
      <div id = "pieChart"> 
      <Pie
        data={PieChart}
        options={PieChartOptions}
      />
      </div>
      <div id = "barChart">
        <h2>Bar Chart</h2> 
        <Bar
          data={BarChart}
          options={BarChartOptions}
          />
      
      </div>
      <div id = "barChart">
        <h2>Scatter Chart</h2> 
        <Scatter
          data={ScatterChart}
          options={ScatterChartOptions}
          />
      
      </div>
      



      </header>
    </div>

  );
}

export default App;
