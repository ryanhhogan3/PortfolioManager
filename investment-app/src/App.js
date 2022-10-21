import React from 'react';
import { Pie } from 'react-chartjs-2';
import './App.css';
//import StockList from './components/StockList';
import AnalyticsBoard from './components/Analytics';
import PieChart from './components/PieChart'
import ScatterChart from './components/ScatterChart';
import ScatterChartOptions from './components/ScatterChartOptions';


import BarChart from './components/BarChart'
import { Bar,Scatter,Line } from 'react-chartjs-2';

import LineChart from './components/LineChart.js';
import LineChartOptions from './components/LineChartOptions';
import PieChartOptions from './components/PieChartOptions.js';
import BarChartOptions from './components/BarChartOptions.js';
import SectorChartOptions from './components/SectorChartOptions';
import SectorChart from './components/SectorChart';
import Footer from './components/Footer';
//import Collapsible from './components/CollapseStockList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Oregon State Investment Group</h1>
      <h2>Values Accurate as of 10/20/2022</h2>

      <div id="LineChart">

        <Line 
          data={LineChart}
          options = {LineChartOptions}
        />
      </div>

      <div id="AnalyticsBoard">
        <AnalyticsBoard/>
      </div>

      <div id = "barChart">
        <h2>Holdings Chart</h2> 
        <Bar
          data={BarChart}
          options={BarChartOptions}
          />     
      </div>

      {/* <div id = "scatterChart">
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
      </div> */}

      <div id="footer">
        <Footer />
      </div>


      </header>
    </div>

  );
}

export default App;
