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
let scatterDataX2 =[];
let scatterDataY2 = [];
let scatterLabels =[];
let collectiveData=[];
let collectiveData2 = [];

/*Get  the total number of holdings */ 
let count = Object.keys(JsonData).length;

//Get labels + holdings from json file
for(let i = 0; i < count; i++){
    scatterDataX.push(JsonData[i].trailingEps);
    scatterDataY.push(JsonData[i].ebitdaMargins)
   // scatterLabels.push(JsonData[i].longName);
  let x = scatterDataX[i];
  let y= scatterDataY[i];
  let storage = {x:x, y:y} 
  collectiveData.push(storage)
}

for(let i = 0; i < count; i++){
  scatterDataX2.push(JsonData[i].priceToBook);
  scatterDataY2.push(JsonData[i].profitMargins)
 // scatterLabels.push(JsonData[i].longName);
let x = scatterDataX2[i];
let y= scatterDataY2[i];
let storage = {x:x, y:y} 
collectiveData2.push(storage)
}



export const ScatterChart = {
  
    
    datasets: [
        {      
        label:'EPS vs EbitdaMargins',
        data:collectiveData,
        borderColor: 'white',

        },
        {      
          label:'EPS vs PE',
          data:collectiveData2,
          borderColor: 'white',
  
          },
      ],
      

  };

  export default ScatterChart