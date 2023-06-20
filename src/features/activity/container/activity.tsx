import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import moment from "moment";

import running from "../../../assets/images/running.png";
import cycling from "../../../assets/images/cycling.png";
import strength from "../../../assets/images/strength-training.png";
import swimming from "../../../assets/images/swimming.png";
import fitness from "./../../../assets/images/fitness.png";
import { BackArrowIcon } from "../../../shared/components/icons/icons";

import Data from "../../../assets/JASONDATA/fitnessData.json";
import { IActivity } from "../../dashboard/interface/dashboard.interface";
import ActivityDetails from "../component/activityDetails";

const Activity: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [activityDetails, setActivityDetails] = useState<IActivity>(
        {} as IActivity
    );

    useEffect(() => {
        Data &&
            Data.activities?.map(
                (data) => data.id === id && setActivityDetails(data)
            );
    }, [id]);

    const barChartData = {
        labels: activityDetails?.weekly_data?.map((entry: any) =>
            moment(entry.date).format("MMM DD YY")
        ),
        datasets: [
            {
                label: "heart rate",
                data: activityDetails?.weekly_data?.map(
                    (entry: any) => entry.heart_rate
                ),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                borderWidth: 1,
            },
            {
                label: "calories burned",
                data: activityDetails?.weekly_data?.map(
                    (entry: any) => entry.calories_burned
                ),
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    // Set chart options
    const barChartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 700, // Customize the maximum value on the y-axis if needed
            },
        },
    };

    const ImageMapper: { [key: string]: string } = {
        Running: running,
        Cycling: cycling,
        "Strength Training": strength,
        Swimming: swimming,
    };

    return (
        <div className="activity-wrapper">
            <div className="back-wrapper flex align-items--center justify-content--between mb--10">
                <div
                    className="back-arrow flex align-items--center justify-content--center bg--white cursor--pointer"
                    onClick={() => navigate(-1)}
                >
                    <BackArrowIcon className="width--18px" />
                </div>
                <div className="flex align-items--center justify-content--center">
                    <div className="logo-wrapper mr--20">
                        <img
                            src={ImageMapper[activityDetails.name]}
                            alt="logo"
                            className="height--full width--full"
                        />
                    </div>
                    <p className="font-size--lg font--bold text--grey-600">
                        {activityDetails.name}
                    </p>
                </div>
            </div>
            <div className="activity-details flex">
                <div className="right-section width--60 mr--20">
                    <div className="chart-section bg--white p--10 mb--20">
                        <p className="chart-title font--bold ml--10">
                            {`${activityDetails.name} Activity Statistics`}
                        </p>
                        <Bar data={barChartData} options={barChartOptions} />
                    </div>
                    <div className="blog-wrapper bg--white p--20">
                        <p className="font-size--lg font--bold mb--10">
                            Recent Blog
                        </p>
                        <div className="blog flex justify-content--between">
                            <div className="blog-image">
                                <img
                                    src={fitness}
                                    alt="blog"
                                    className="height--full width--full"
                                />
                            </div>
                            <div className="content width--50 ml--40">
                                <ul>
                                    <li>
                                        Exercise is a celebration of what your
                                        body can do, not a punishment for what
                                        you ate.
                                    </li>
                                    <li>
                                        Strength does not come from the physical
                                        capacity. It comes from an indomitable
                                        will
                                    </li>
                                    <li>
                                        Fitness is not a destination, it's a way
                                        of life.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <ActivityDetails data={activityDetails} />
            </div>
        </div>
    );
};
export default Activity;
