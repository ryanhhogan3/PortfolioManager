import React from "react";
import { Pie } from 'react-chartjs-2';
import PieChartOptions from "../ChartOptions/PieChartOptions";
import PieChart from '../Charts/PieChart'

import BarChart from "../Charts/BarChart";
import { Bar } from 'react-chartjs-2';
import BarChartOptions from '../ChartOptions/BarChartOptions';

function PiePanel(){
    return(
    <div className="CompanyHoldingsByWeight">
      
      <div id = "pieChart" > 
          <Pie
            data={PieChart}
            options={PieChartOptions}
          />
      </div>
      <div id = "barChart">
          <Bar
            data={BarChart}
            options={BarChartOptions}
          />     
        </div>
    </div>

    
    )
}

export default PiePanel