import React from "react";
import portfolioData from "./PortfolioMetrics.json";



function PerformancePanel(){
    
    return(
        <div className="PerformancePanel">
            <h3>Performance Panel</h3>
            <tr>
                <tr>Performance Metrics:</tr>
                <tr>___________</tr>
                <tr>Year To Date</tr>
                <tr>OSIG: -22.50%</tr>
                <tr>SP500: -21.94%</tr>
                <tr>___________</tr>
                <tr>One Year</tr>
                <tr>OSIG: -25.13%</tr>
                <tr>SP500: -20.25%</tr>
                <tr>___________</tr>
                <tr>Three Years</tr>
                <tr>OSIG: 17.55%</tr>
                <tr>SP500: 20.68%</tr>
                <tr>___________</tr>
                <tr>Since Inception</tr>
                <tr>OSIG: 224.07%</tr>
                <tr>SP500: 221.08%</tr>
                <br></br>
            </tr>

        </div>
    )
}

export default PerformancePanel