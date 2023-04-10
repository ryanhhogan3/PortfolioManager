import React from "react";
import portfolioData from "../JSONFiles/PortfolioMetrics.json";



function PerformancePanel(){
    
    return(
        <div className="PerformancePanel">
            OSIG Performance
            <tr>
                <tr>Value: ${portfolioData.Value.YTD}</tr>
                <tr>Cash: ${portfolioData.Cash.YTD}</tr>
                <tr>___________</tr>
                <tr>Year To Date</tr>
                <tr>OSIG: {portfolioData[0].YTD}%</tr>
                <tr>SP500: {portfolioData[1].YTD}%</tr>
                <tr>___________</tr>
                <tr>One Year</tr>
                <tr>OSIG: {portfolioData[0]["1 Year "]}%</tr>
                <tr>SP500: {portfolioData[1]["1 Year "]}%</tr>
                <tr>___________</tr>
                <tr>Three Years</tr>
                <tr>OSIG: {portfolioData[0]["3 Year"]}%</tr>
                <tr>SP500: {portfolioData[1]["3 Year"]}%</tr>
                <tr>___________</tr>
                <tr>Five Years</tr>
                <tr>OSIG: {portfolioData[0]["5 Year"]}%</tr>
                <tr>SP500: {portfolioData[1]["5 Year"]}%</tr>
                <br></br>
            </tr>

        </div>
    )
}

export default PerformancePanel