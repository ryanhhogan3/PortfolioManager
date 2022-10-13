//Displays all contents of Pie Chart
export const BarChartOptions = {
    plugins: {
        title: {
          display: false,
          text: 'Chart.js Bar Chart - Stacked',
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    };


export default BarChartOptions