import React from 'react';
import './App.css';
import AnalyticsBoard from './components/Vizualizations/Analytics';
import ScatterChart from './components/Charts/ScatterChart';
import ScatterChartOptions from './components/ChartOptions/ScatterChartOptions';
import BarChart from './components/Charts/BarChart'
import { Bar,Scatter,Line } from 'react-chartjs-2';
import LineChart from './components/Charts/LineChart.js';
import LineChartOptions from './components/ChartOptions/LineChartOptions';
import BarChartOptions from './components/ChartOptions/BarChartOptions.js';

//import StockList from './components/StockList';
//import SectorChartOptions from './components/ChartOptions/SectorChartOptions';
//import SectorChart from './components/Charts/SectorChart';
//import PieChart from './components/Charts/PieChart';
//import { Pie } from 'react-chartjs-2';
//import PieChartOptions from './components/ChartOptions/PieChartOptions.js';
//import Collapsible from './components/CollapseStockList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Oregon State Investment Group</h1>
      <h2>Values Accurate as of 10/6/2022</h2>
      <div id="AnalyticsBoard">
        <AnalyticsBoard/>
      </div>

      <div id="LineChart">
        <h2>Line Chart</h2>
        <Line 
          data={LineChart}
          options = {LineChartOptions}
        />
      </div>

      <div id = "barChart">
        <h2>Holdings Chart</h2> 
        <Bar
          data={BarChart}
          options={BarChartOptions}
          />     
      </div>

      <div id = "scatterChart">
        <h2>Scatter Chart</h2> 
        <Scatter
          data={ScatterChart}
          options={ScatterChartOptions}
          />  
      </div>
      <div class="selectScatter">
        <select>
          <option value="PE">PE</option>
          <option value="EPS">EPS</option>
          <option value="BookValue">BookValue</option>

        </select>
      </div>


      </header>
    </div>

  );
}

export default App;
