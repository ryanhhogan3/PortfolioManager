import React from "react";
import SectorChart from "./SectorChart";
import BarChart from './BarChart'
import { Bar } from 'react-chartjs-2';
import SectorChartOptions from "./SectorChartOptions";



function AllocationPanel(){
    return(
        <div className="Allocation-panel">
            Allocation Panel
            <div id = "SectorChart">

        <Bar
          data={SectorChart}
          options={SectorChartOptions}
          />  
      </div>

        </div>
    )
}

export default AllocationPanel