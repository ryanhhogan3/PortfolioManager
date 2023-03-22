import React from "react";
import PositionsPanelData from "./PositionsPanelData";
//import Collapsible from "./CollapseStockList";
function PositionsPanel(){
    return(
        <div className="PositionsPanel">
            Current Holdings
            <PositionsPanelData/>
        </div>
    )
}

export default PositionsPanel