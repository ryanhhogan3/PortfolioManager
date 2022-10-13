import React from "react";
import JsonData from '../JSONFiles/data.json'
//import {useState} from "react"

/*
function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    // but you can adapt to make it append to the element you want.
    document.body.appendChild(img);
}
*/

function PositionsPanelData(){
    const DisplayData=JsonData.map(
    (info) =>{
        return(
            <tr>
                <div id="stockLogo">
                    <img src={info.logo_url} alt =""  />
                </div>
                <td>{info.symbol}</td>
                <td>{info.longName}</td>
                <td>{info.pegRatio}</td>
                <td>{info.dividendRate}</td>
                <td>{info.beta}</td>
                <td>{info.trailingPE}</td>
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
                        <th>Logo</th>
                        <th>Ticker</th>
                        <th>Company Name</th>
                        <th>Peg Ratio</th>
                        <th>Yeild</th>
                        <th>Beta</th>
                        <th>PE</th>
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

