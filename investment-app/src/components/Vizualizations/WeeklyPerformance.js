import InfoRow from "./InfoRow";
import LineChart from "../Charts/LineChart";
import { Line } from 'react-chartjs-2';
import LineChartOptions from "../ChartOptions/LineChartOptions";
import PerformancePanel from "./PerformancePanel";

function WeeklyPerformance(){
    
    return(
        <div className="WeeklyPerformance">
            <div className="panel-info">
            <InfoRow />
            </div>
            <div class="LineChart">    
                <Line 
                data={LineChart}
                options = {LineChartOptions}
                />
            </div>
            <div className="panel-balance">
            <PerformancePanel />
            </div>
        </div>
    )
}

export default WeeklyPerformance