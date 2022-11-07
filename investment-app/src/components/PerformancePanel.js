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
                <tr>OSIG: -21.27%</tr>
                <tr>SP500: -20.79%</tr>
                <tr>___________</tr>
                <tr>One Year</tr>
                <tr>OSIG: -23.66%</tr>
                <tr>SP500: -19.99%</tr>
                <tr>___________</tr>
                <tr>Three Years</tr>
                <tr>OSIG: 17.69%</tr>
                <tr>SP500: 20.13%</tr>
                <tr>___________</tr>
                <tr>Since Inception</tr>
                <tr>OSIG: 229.20%</tr>
                <tr>SP500: 225.82%</tr>
                <br></br>
            </tr>

        </div>
    )
}

export default PerformancePanel