import React from "react";
import JsonData from './data.json'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
let Rainbow = require('rainbowvis.js');

let pieData =[];
let pieLabels =[];

/*Get  the total number of holdings */ 
let count = Object.keys(JsonData).length;

//Get labels + holdings from json file
for(let i = 0; i < count; i++){
    pieData.push(JsonData[i].pctPortfolio);
    pieLabels.push(JsonData[i].longName);
    
}

function SectorChart({ chartData }){
  return (
    <div>
      Sector Chart
    </div>
  );
};

export default SectorChart