import React from "react";
import { Pie } from 'react-chartjs-2';
import PieChartOptions from "../ChartOptions/PieChartOptions";
import PieChart from '../Charts/PieChart'


function PiePanel(){
    return(
        <div className="PiePanel">
            Info Panel
            <div id = "pieChart"> 
      <Pie
        data={PieChart}
        options={PieChartOptions}
      />
      </div>
            
        </div>
    )
}

export default PiePanel