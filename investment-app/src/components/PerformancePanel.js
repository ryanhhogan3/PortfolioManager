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
                <tr>OSIG: -22.72%</tr>
                <tr>SP500: -21.85%</tr>
                <tr>___________</tr>
                <tr>One Year</tr>
                <tr>OSIG: -25.14%</tr>
                <tr>SP500: -19.34%</tr>
                <tr>___________</tr>
                <tr>Three Years</tr>
                <tr>OSIG: 18.02%</tr>
                <tr>SP500: 21.91%</tr>
                <tr>___________</tr>
                <tr>Since Inception</tr>
                <tr>OSIG: 223.15%</tr>
                <tr>SP500: 221.45%</tr>
                <br></br>
            </tr>

        </div>
    )
}

export default PerformancePanel