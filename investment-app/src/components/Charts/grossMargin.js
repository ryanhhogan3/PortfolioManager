import JsonData from '../JSONFiles/data.json'
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
//import { Bar } from 'react-chartjs-2';
//import React from "react";

ChartJS.register(CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend);

let Rainbow = require('rainbowvis.js');

let barData =[];
let barLabels =[];

/*Get  the total number of holdings */ 
let count = Object.keys(JsonData).length;

//Get labels + holdings from json file
for(let i = 0; i < count; i++){
    barData.push(JsonData[i].grossMargins);
    barLabels.push(JsonData[i].longName);
    
}
//Sorts the data by weight %
let arrayOfObj = barLabels.map(function(d, i) {
  return {
    label: d,
    data: barData[i] || 0
  };
});

let sortedArrayOfObj = arrayOfObj.sort(function(a, b) {
    return b.data-a.data;
});

let newBarLabels = [];
let newBarData = [];
sortedArrayOfObj.forEach(function(d){
    newBarLabels.push(d.label);
    newBarData.push(d.data);
});
//End of sorting the data by weight %


//Makes the color of Pie chart
let numberOfItems = count;
let rainbow = new Rainbow(); 
rainbow.setNumberRange(1, numberOfItems);
rainbow.setSpectrum('#393E46','#EE6983', '#00ADB5','#FFC4C4');
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

//End of Makes the color of Pie chart 

//Displays all contents of Bar Chart
export const grossMargin = {

  labels: newBarLabels,
  datasets: [
    {    
      label: 'Current Holdings',
      data: newBarData,
      backgroundColor:s,    
    },    
  ],
  
};


export default grossMargin