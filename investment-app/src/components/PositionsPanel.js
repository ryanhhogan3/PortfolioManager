import React from "react";
import Collapsible from "./CollapseStockList";
import PositionsPanelData from "./PositionsPanelData";

function PositionsPanel(){
    return(
        <div className="PositionsPanel">
            Positions Panel
            <PositionsPanelData/>
        </div>
    )
}

export default PositionsPanel