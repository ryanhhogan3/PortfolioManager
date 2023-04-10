import React from 'react';
import './App.css';
import {Link,Route,Routes } from "react-router-dom";
import AnalyticsBoard from './components/Vizualizations/Analytics';
//import {LineChart} from './components/Charts/LineChart.js';
//import LineChartOptions from './components/ChartOptions/LineChartOptions';
import Footer from './components/Vizualizations/Footer';
import OsigLogo from './components/Images/osig-word-logo-transparent.png'
import WeeklyPerformance from './components/Vizualizations/WeeklyPerformance';
import PositionsPanel from './components/Vizualizations/PositionsPanel';
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
        <img src={OsigLogo} alt="My PNG file" style={{ width: '210px', height: '55px'}} />
      </div>


      <div class="navbar">

        <Link to='./weeklyPerformance' class="navbar" >Weekly Performance</Link>      
        <Link to='./Analytics' class="navbar" >Get Portfolio Data</Link>
        <Link to='./PositionsPanel' class="navbar" > Company Details</Link>
        <a href="https://www.oregonstateinvestmentgroup.com/">OSIG Website</a>.

      </div>
      
      

      <Routes>
        <Route path = '/weeklyperformance'element = {<WeeklyPerformance/>} />
        <Route path = '/Analytics'element = {<AnalyticsBoard/>}  />
        <Route path = '/PositionsPanel'element = {<PositionsPanel/>}  />
      </Routes>

      </header>

      <div id="footer">
        <Footer />
      </div>


    </div>
    

  );
}

export default App;
