import histdata from '../JSONFiles/PortfolioValues.json'
import {Chart as ChartJS, CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
//import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,);



const histDate = Object.keys(histdata)
const dataVal = Object.values(histdata)
let count = Object.keys(histdata).length




let histValues = [];
for(let i = 1; i< count; i++){
  const dataPoint={
      Cash: dataVal[i].Cash,
      'SP 500': dataVal[i]['SP 500'],
      Total : dataVal[i].Total, 
      histDate : histDate[i]
  }
  histValues.push(dataPoint)
}


const newHistCash =[];
const newHistDate =[];
const newHistSP = [];
const newHistTotal =[];


//Changes string to float for [Cash, SP500, Portfolio value] 
// need to plot
// groups the date  and values together for plotting
for(let i = 1; i< count ; i++){
    newHistCash.push({x:histDate[i],y:parseFloat(dataVal[i].Cash.split(",").join(""))}) 
    newHistDate.push(histDate[i])
    newHistSP.push({x:histDate[i],y:parseFloat(dataVal[i]['SP 500'].split(",").join(""))})
    newHistTotal.push({x:histDate[i],y:parseFloat(dataVal[i].Total.split(",").join(""))})

}

export const LineChart = {
  labels:newHistDate,
  datasets: [
    {
      label: 'Cash',
      data: newHistCash,
      borderColor: "blue",
      backgroundColor: 'blue',     
      color:"green",
      spanGaps: true,
      pointRadius: 1,

    },
    {
      label: 'SP500',
      data: newHistSP,
      borderColor: "red",
      backgroundColor: 'red',     
      spanGaps: true,
      pointRadius: 1,
    },
    {
      label: 'Portfolio Value',
      data: newHistTotal,
      borderColor: "orange",     
      backgroundColor: 'orange',     
      spanGaps: true,
      pointRadius: 1,
    },
  ],
}  
export default LineChart;

