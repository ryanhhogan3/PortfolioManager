import React from "react";
import PiePanel from "./InfoPanel"
import AllocationPanel from "./AllocationPanel";
import PerformancePanel from "./PerformancePanel";
import PositionsPanel from "./PositionsPanel";
import InfoRow from "./InfoRow";




function AnalyticsBoard(){
    return(
        <div className="panels">
          
        <div className="panel-info">
          <InfoRow />
        </div>
        <div className="panel-pie">
          <PiePanel />
        </div>
        <div className="panel-allocation">
          <AllocationPanel />
        </div>
        <div className="panel-balance">
          <PerformancePanel />
        </div>
        
        <div className="panel-positions">
          <PositionsPanel />
        </div>
      </div>
    );
}

export default AnalyticsBoard