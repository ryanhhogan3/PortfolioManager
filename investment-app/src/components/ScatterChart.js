import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import JsonData from './data.json'


ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

let scatterDataX =[];
let scatterDataY = [];
let scatterLabels =[];

/*Get  the total number of holdings */ 
let count = Object.keys(JsonData).length;

//Get labels + holdings from json file
for(let i = 0; i < count; i++){
    scatterDataX.push(JsonData[i].trailingEps);
    scatterDataY.push(JsonData[i].ebitdaMargins)
    scatterLabels.push(JsonData[i].longName);
    
}
console.log(scatterLabels);
console.log(scatterDataX);
console.log(scatterDataY);



export const ScatterChart = {
    datasets: [
        {
          label: 'A dataset',
          data: [{
            x:-10,
            y:2
          },{
            x:-15,
            y:5
          },{
            x:-11,
            y:7
          },{
            x:-20,
            y:8
          }],
          backgroundColor: 'rgba(255, 99, 132, 1)',
        },
      ],
  };

  export default ScatterChart