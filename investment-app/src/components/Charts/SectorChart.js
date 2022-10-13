import HoldingsData from '../JSONFiles/data.json'
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
let Rainbow = require('rainbowvis.js');
ChartJS.register(CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend);

let count = Object.keys(HoldingsData).length; // Number of holdings (~28)
let holdings = [];                            // Array to store holding object
let holdingsBySectorPct = {}                  // Dictionary to store holding percent by sector
let holdings_data = []                        /* 
                                                label: *HOLDING NAME*,
                                                data: [{x: *HOLDING SECTOR*, y: *HOLDING PCT*}],
                                                backgroundColor: *RANDOM COLOR*,
                                              */

// Fills holdings array with holding objects, data from 'data.json'
for(let i = 0; i < count - 1; i++){
  const holding = {
    longName: HoldingsData[i].longName,         // Name
    sector: HoldingsData[i].sector,             // Sector
    pctPortfolio: HoldingsData[i].pctPortfolio, // PCT
    data: HoldingsData[i]                       // Full Data
  };
  holdings.push(holding)
}

//Makes the color of Bar chart
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


// Fill data to be used by stacked bar chart
for(let i = 0; i < count - 1; i++){
  holdings_data.push(
    {
      label: holdings[i].longName,                                            // Hover label
      data: [{x:holdings[i].sector, y:holdings[i].pctPortfolio}],             // Set x to stack
      backgroundColor: s[i],
    }
  )
}

// Chart Export
export const SectorChart = {
  labels: Object.keys(holdingsBySectorPct), // Sectors
  datasets: holdings_data,                  // Data
  
};

export default SectorChart