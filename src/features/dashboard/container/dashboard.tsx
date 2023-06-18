import moment from "moment";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

import data from '../../../assets/JASONDATA/fitnessData.json'

import UserInfo from '../component/userInfo';
import Card from "../component/card";

const Dashboard:React.FC = () => {

     // Prepare the chart data
    const chartData = {
        labels: data.activities.map((entry: any) =>
            moment(entry.date).format("MMM DD YY")
        ),
        datasets: [
            {
                label: "heart rate",
                data: data.activities.map(
                    (entry: any) => entry.heart_rate.average
                ),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                borderWidth: 1,
            },
            {
                label: "calories burned",
                data: data.activities.map(
                    (entry: any) => entry.calories_burned
                ),
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    // Set chart options
    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 700, // Customize the maximum value on the y-axis if needed
            },
        },
    };

    return (
        <div className="dashboard-wrapper flex">
            <div className="right-section width--70 mr--20">
                <Card data={data.user}/>
                <div className="chart-section flex justify-content--center bg--white flex--column mb--20">
                    <p className="font--bold ml--10">
                        Fitness Statistics
                    </p>
                    <Line data={chartData} options={chartOptions} />
                </div>
            </div>
            <UserInfo data={data.user} activity={data.activities}/>
        </div>
    )
}
export default Dashboard;