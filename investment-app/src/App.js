import React from 'react';
import './App.css';
import AnalyticsBoard from './components/Vizualizations/Analytics';
import ScatterChart from './components/Charts/ScatterChart';
import ScatterChartOptions from './components/ChartOptions/ScatterChartOptions';
import BarChart from './components/Charts/BarChart'
import { Bar,Scatter,Line } from 'react-chartjs-2';
import {LineChart} from './components/Charts/LineChart.js';
import LineChartOptions from './components/ChartOptions/LineChartOptions';
import BarChartOptions from './components/ChartOptions/BarChartOptions.js';
import grossMargins from './components/Charts/grossMargin';
import Footer from './components/Vizualizations/Footer';
import OsigLogo from './components/Images/osig-word-logo-transparent.png'
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

      <div className = "Osig">
        <img src={OsigLogo} alt="My PNG file" style={{ width: '280px', height: '70px' }} />
      </div>

      <div id="AnalyticsBoard">
        <AnalyticsBoard/>
      </div>

      <div class="LineChart">
      <canvas id = "myChart" width="1300" height="100"></canvas>
        <Line 
          data={LineChart}
          options = {LineChartOptions}
        />
      </div>

      <div id = "barChart">
        <h2>Holdings</h2> 
        <Bar
          data={BarChart}
          options={BarChartOptions}
          />     
      </div>
      
      <div id = "GrossMargins">
        <h2>Gross Margins</h2> 
        <Bar
          data={grossMargins}
          options={BarChartOptions}
          />     
      </div>

      <div id = "scatterChart">
        <h3>EPS vs EbitdaMargins / EPS vs PE</h3>        
        <Scatter
          data={ScatterChart}
          options={ScatterChartOptions}
          />  
      </div>



      <div id="footer">
        <Footer />
      </div>

      </header>
    </div>
    

  );
}

export default App;
