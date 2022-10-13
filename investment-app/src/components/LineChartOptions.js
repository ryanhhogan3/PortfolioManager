export const LineChartOptions = {
    responsive: true,

    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: false,
        text: 'Cash    SP500    PortfolioValue',
        }
    },
    elements:{
        line:{
            borderWidth:3,
            
        },
        point:{
            pointStyle: "crossRot",
        }
    }
    

}
    
export default LineChartOptions