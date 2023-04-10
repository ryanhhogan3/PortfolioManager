import React from "react";
import PiePanel from "./InfoPanel"
import AllocationPanel from "./AllocationPanel";
import BarChart from "../Charts/BarChart";
import { Bar,Scatter } from 'react-chartjs-2';
import BarChartOptions from '../ChartOptions/BarChartOptions';
import ScatterChart from '../Charts/ScatterChart';
import ScatterChartOptions from '../ChartOptions/ScatterChartOptions';
import grossMargins from '../Charts/grossMargin';

//import {Link,Route,Routes } from "react-router-dom";

function AnalyticsBoard(){
    return(
      
        <div className="panels">
          Analytics Board

        <div className="panel-pie">
          <PiePanel />
        </div>
        <div className="panel-allocation">
          <AllocationPanel />
        </div>

        <div className = "barChart">
          <h2>Holdings</h2> 
          <Bar
            data={BarChart}
            options={BarChartOptions}
          />     
        </div>

        <div className = "GrossMargins">
          <h2>Gross Margins</h2> 
            <Bar
             data={grossMargins}
              options={BarChartOptions}
            />     
        </div>

        <div className = "scatterChart">
          <h3>EPS vs EbitdaMargins / EPS vs PE</h3>        
            <Scatter
             data={ScatterChart}
              options={ScatterChartOptions}
            />  
        </div>

      </div>
    );
}

export default AnalyticsBoard