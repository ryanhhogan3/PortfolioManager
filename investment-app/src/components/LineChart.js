import histdata from './PortfolioValues.json'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
);

export const options = {
responsive: true,
plugins: {
    legend: {
    position: 'top',
    },
    title: {
    display: true,
    text: 'Chart.js Line Chart',
    },
},
}
// scales: {
//     y: {
//       title: {display: true, text: "Weight in lbs"}
//     },
//     x: {
//       adapters: {

//         type: "time",
//         distribution: "linear",
//         time: {
//           parser: "yyyy-MM-dd",
//           unit: "month"
//         },
//         title: {
//           display: true,
//           text: "Date"
//         }
//       }
//     }
//   },
// };

let values = [];

const labels = Object.keys(histdata[1])
const data = Object.values(histdata[1])
//console.log(labels)
// console.log(data)

console.log(data, labels)

export const LineChart = {
    labels,
    datasets: [
      {
        label: "dataset1",
      data:[{
        x:'2016-12-25', y:5000}, {x:'2016-12-31', y:6000}
      ],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
      
    ],
  };

export default LineChart;