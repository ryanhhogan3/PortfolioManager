import {Chart as ChartJS,LinearScale,PointElement,LineElement,Tooltip,Legend} from 'chart.js';
import JsonData from '../JSONFiles/data.json'
//import React from 'react';
//import { Scatter } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);
let Rainbow = require('rainbowvis.js');

let scatterDataX =[];
let scatterDataY = [];

let scatterDataX2 =[];
let scatterDataY2 = [];
let scatterLabels =[];
let scatterLabels2 =[];
let collectiveData=[];
let collectiveData2 = [];

/*Get  the total number of holdings */ 
let count = Object.keys(JsonData).length;

//Get labels + holdings from json file

for(let i = 0; i < count; i++){
  if(JsonData[i].trailingEps < 100){
    scatterDataX.push(JsonData[i].trailingEps)
    scatterDataY.push(JsonData[i].ebitdaMargins)
    scatterLabels.push(JsonData[i].longName);
  }else{
    scatterDataX.push(0);
    scatterDataY.push(0)
    scatterLabels.push(JsonData[i].longName + " (Values larger than 100)");
  }
    let x = scatterDataX[i];
    let y= scatterDataY[i];
    let z = scatterLabels[i];
    let storage = {x:x, y:y,z:z} 
    collectiveData.push(storage)

}



for(let i = 0; i < count; i++){
  if(JsonData[i].priceToBook < 100){
    scatterDataX2.push(JsonData[i].priceToBook);
    scatterDataY2.push(JsonData[i].profitMargins)
    scatterLabels2.push(JsonData[i].longName);
  }else{
    scatterDataX2.push(0);
    scatterDataY2.push(0)
    scatterLabels2.push(JsonData[i].longName + " (Values larger than 100)");
  }

  let x = scatterDataX2[i];
  let y= scatterDataY2[i];
  let z = scatterLabels2[i];
  let storage = {x:x, y:y, z:z} 
  collectiveData2.push(storage)
}



//Makes the color of Pie chart
let numberOfItems = count;
let rainbow = new Rainbow(); 
rainbow.setNumberRange(1, numberOfItems);
rainbow.setSpectrum('#EE6983', '#00ADB5','#FFC4C4');
let s = [];
for (let j = 1; j <= numberOfItems; j++) {
    let hexColour = rainbow.colourAt(j);
    s.push('#' + hexColour);
}
function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
shuffle(s);




export const ScatterChart = {

    datasets: [
        {      
        label:'EPS vs EbitdaMargins',
        data:collectiveData,
        borderColor: s,
        },
        {      
        label:'EPS vs PE',
        data:collectiveData2,
        borderColor: s, 
        },
      ],
  };

  export default ScatterChart