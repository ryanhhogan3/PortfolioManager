import React from "react";
import Stock from "./Stock";
import JsonData from "./data.json"


function PositionsPanelData(){
    const DisplayData=JsonData.map(
    (info) =>{
        return(
            <tr>
                <td>{info.symbol}</td>
                <td>{info.longName}</td>
                <td>{info.pctPortfolio}</td>
            </tr>
        )
    }
    )
    return(
        <div>
            <table class="stockTable">
                <thead>
                    <tr>
                        <th>Ticker</th>
                        <th>Company Name</th>
                        <th>% of Portfolio</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
                </table>
        </div>
    )
}

export default PositionsPanelData

