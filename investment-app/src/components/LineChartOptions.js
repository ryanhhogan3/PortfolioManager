export const LineChartOptions = {
    responsive: true,

    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
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