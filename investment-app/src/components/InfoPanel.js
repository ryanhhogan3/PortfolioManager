import React from "react";
import JsonData from './data.json'
import { Pie } from 'react-chartjs-2';
import PieChartOptions from "./PieChartOptions";
import PieChart from './PieChart'


function InfoPanel(){
    return(
        <div className="InfoPanel">
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

export default InfoPanel