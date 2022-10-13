export const SectorChartOptions = {
    plugins: {
      legend:{
        display: false,
    },
        title: {
          
          display: false,
        },
      },    
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
};
export default SectorChartOptions