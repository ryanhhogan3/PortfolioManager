//import React from 'react';
import JsonData from "./data.json"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
let Rainbow = require('rainbowvis.js');

var pieData =[];
var pieLabels =[];

/*Get  the total number of holdings */ 
var count = Object.keys(JsonData).length;

//Get labels + holdings from json file
for(var i = 0; i < count; i++){
    pieData.push(JsonData[i].pctPortfolio);
    pieLabels.push(JsonData[i].longName);
    
}

//Sorts the data by weight %
let arrayOfObj = pieLabels.map(function(d, i) {
  return {
    label: d,
    data: pieData[i] || 0
  };
});

let sortedArrayOfObj = arrayOfObj.sort(function(a, b) {
    return b.data-a.data;
});

var newPieLabels = [];
var newPieData = [];
sortedArrayOfObj.forEach(function(d){
    newPieLabels.push(d.label);
    newPieData.push(d.data);
});
//End of sorting the data by weight %


//Makes the color of Pie chart
var numberOfItems = count;
var rainbow = new Rainbow(); 
rainbow.setNumberRange(1, numberOfItems);
rainbow.setSpectrum('#393E46','#EE6983', '#00ADB5','#FFC4C4');
var s = [];
for (var j = 1; j <= numberOfItems; j++) {
    var hexColour = rainbow.colourAt(j);
    s.push('#' + hexColour);
}
function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
shuffle(s);

//End of Makes the color of Pie chart 


//Displays all contents of Pie Chart
export const PieChart = {

  labels: newPieLabels,
  datasets: [
    {    
      data: newPieData,
      backgroundColor: s,
      borderColor: 'white',
      borderWidth: 2.5,
     
    },    
  ],
  
};


export default PieChart