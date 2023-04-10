import React from "react";
import PositionsPanelData from "./PositionsPanelData";
//import Collapsible from "./CollapseStockList";
function PositionsPanel(){
    return(

        <div className="PositionsPanel">
            <h3 className= "title"> Our Current Holdings </h3>
            <PositionsPanelData/>
        </div>
    )
}

export default PositionsPanel