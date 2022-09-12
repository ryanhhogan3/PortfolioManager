import React from "react";
import Data from "./testvalues.json";

function HoldingsList(){
    const DisplayHoldings=Data.map(
        (info) => {
            return(
                <tr>
                <tr>{info.Ticker}</tr>
                </tr>
            )
        }
    )
    return(
        <div>
            <table class="holdingsTable">
                <thead>
                    <tr>
                        <th>Ticker</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayHoldings}
                </tbody>
            </table>
        </div>
    )
}

export default HoldingsList