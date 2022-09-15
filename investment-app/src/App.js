<<<<<<< Updated upstream
import React from 'react';
import { Pie } from 'react-chartjs-2';
import './App.css';
import StockList from './components/StockList';
import AnalyticsBoard from './components/Analytics';
//import PieChart from './components/PieChart';
import PieChart from './components/PieChart'
=======

import './App.css';
import React from 'react';
>>>>>>> Stashed changes

//import StockList from './components/StockList';
import AnalyticsBoard from './components/Analytics';
import PieChart from './components/PieChart'
import { Pie } from 'react-chartjs-2';
import PieChartOptions from './components/PieChartOptions.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <StockList/>
      <AnalyticsBoard/>

<<<<<<< Updated upstream
      <h3> Holdings by weight </h3>
      <Pie data={PieChart} />
=======
        <h1>
          Oregon State Investment Group
        </h1>
               
      <AnalyticsBoard/>


      <h3> Holdings by weight </h3>
      <div id = "pieChart"> 
      <Pie
        data={PieChart}
        options={PieChartOptions}
      />
      </div>

>>>>>>> Stashed changes

      </header>
    </div>

  );
}

export default App;
