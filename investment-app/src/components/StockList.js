import React from "react";
import JsonData from "./data.json"


function StockList(){
    const DisplayData=JsonData.map(
    (info) =>{
        return(
            <tr>
                <td>{info.symbol}</td>
                <td>{info.longName}</td>
                <td>{info.currentPrice}</td>
                <td>{info.beta}</td>
                <td>{info.marketCap}</td>
                <td>{info.sector}</td>
                <td>{info.bookValue}</td>
                <td>{info.dividendRate}</td>
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
                        <th>Price</th>
                        <th>Beta</th>
                        <th>Market Cap</th>
                        <th>Sector</th>
                        <th>Book Value</th>
                        <th>Yeild %</th>

                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
                </table>
        </div>
    )
}

export default StockList

