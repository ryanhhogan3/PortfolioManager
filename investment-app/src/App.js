import React from 'react';
import './App.css';
import AnalyticsBoard from './components/Vizualizations/Analytics';
import ScatterChart from './components/Charts/ScatterChart';
import ScatterChartOptions from './components/ChartOptions/ScatterChartOptions';
import BarChart from './components/Charts/BarChart'
import { Bar,Scatter } from 'react-chartjs-2';
//import {LineChart} from './components/Charts/LineChart.js';
//import LineChartOptions from './components/ChartOptions/LineChartOptions';
import BarChartOptions from './components/ChartOptions/BarChartOptions.js';
import grossMargins from './components/Charts/grossMargin';
import Footer from './components/Vizualizations/Footer';
import OsigLogo from './components/Images/osig-word-logo-transparent.png'
import WeeklyPerformance from './components/Vizualizations/WeeklyPerformance';
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
      <div class="tab">
        <button class="tablinks" onclick="openTab(event, 'WeeklyPerformance')">Weekly Performance</button>
        <button class="tablinks" onclick="openTab(event, 'GetPortfolioData')">Get Portfolio Data</button>
        <button class="tablinks" onclick="openTab(event, 'CompanyDetails')">Company Details</button>
      </div>

      <div id="WeeklyPerformance">
        <WeeklyPerformance/>
      </div>
      <div id="AnalyticsBoard">
        <AnalyticsBoard/>
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
