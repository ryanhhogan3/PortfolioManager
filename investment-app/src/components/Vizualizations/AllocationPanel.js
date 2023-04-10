import React from "react";
import SectorChart from "../Charts/SectorChart";
import { Bar } from 'react-chartjs-2';
import SectorChartOptions from "../ChartOptions/SectorChartOptions";
//import BarChart from '../Charts/BarChart'


function AllocationPanel(){
    return(
        <div className="Allocation-panel">
            <div id = "SectorChart">
        Holdings By Sector  
        <Bar
          data={SectorChart}
          options={SectorChartOptions}
          />  
      </div>

        </div>
    )
}

export default AllocationPanel