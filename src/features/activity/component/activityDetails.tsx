import { Progress, Space } from 'antd';

import heartbeat from '../../../assets/images/heart-beat.png';
import elevation from '../../../assets/images/elevation.png';
import calories from '../../../assets/images/calories.png';
import duration from '../../../assets/images/timer.png';
import pace from '../../../assets/images/pace.png';
import running from '../../../assets/images/running.png';

import { IActivity } from "../../dashboard/interface/dashboard.interface";

interface IProps {
    data: IActivity
}

const ActivityDetails:React.FC<IProps> = (props) => {
const {data} = props;

console.log(data,'data')

    return (
        <div className="left-section bg--white width--40 p--20">
            <p className='font-size--lg font--bold text--grey-600 mb--20'>Activity Details</p>
            <div className="activity_wrapper flex flex--wrap mb--20">
            <div className="avg-section p--20">
            <div className="flex justify-content--between">
                <div className="flex flex--column">
            <p className="text--grey-400">Heart Rate</p>
            <p className="font-size--24 font--bold">
                {data?.heart_rate?.average}
            </p>
                </div>
            <div className="avg-section-image">
                <img src={heartbeat} alt='heartbeat' className="height--full width--full"/>
            </div>
            </div>
            <p className="font-size--xs text--grey-50">Beats per minute</p>
            </div>
            <div className="avg-section p--20">
            <div className="flex justify-content--between">
                <div className="flex flex--column">
            <p className="text--grey-400">Calories burned</p>
            <p className="font-size--24 font--bold">
                {data.calories_burned}
            </p>
                </div>
            <div className="avg-section-image">
                <img src={calories} alt='calories' className="height--full width--full"/>
            </div>
            </div>
            <p className="font-size--xs text--grey-50">kilocalories</p>
        </div>
        <div className="avg-section p--20">
            <div className="flex justify-content--between">
                <div className="flex flex--column">
            <p className="text--grey-400">Step</p>
            <p className="font-size--24 font--bold">
                {data.steps}
            </p>
                </div>
            <div className="avg-section-image">
                <img src={running} alt='running' className="height--full width--full"/>
            </div>
            </div>
            <p className="font-size--xs text--grey-50">counts</p>
        </div>
        <div className="avg-section p--20">
            <div className="flex justify-content--between">
                <div className="flex flex--column">
            <p className="text--grey-400">Elevation Gain</p>
            <p className="font-size--24 font--bold">
                {data.elevation_gain}
            </p>
                </div>
            <div className="avg-section-image">
                <img src={elevation} alt='running' className="height--full width--full"/>
            </div>
            </div>
            <p className="font-size--xs text--grey-50">Feet</p>
        </div>
        <div className="avg-section p--20">
            <div className="flex justify-content--between">
                <div className="flex flex--column">
            <p className="text--grey-400">Duration</p>
            <p className="font-size--24 font--bold">
                {data.duration}
            </p>
                </div>
            <div className="avg-section-image">
                <img src={duration} alt='running' className="height--full width--full"/>
            </div>
            </div>
            <p className="font-size--xs text--grey-50">Minutes</p>
        </div>
        <div className="avg-section p--20">
            <div className="flex justify-content--between">
                <div className="flex flex--column">
            <p className="text--grey-400">Pace</p>
            <p className="font-size--24 font--bold">
                {data.pace?.average}
            </p>
                </div>
            <div className="avg-section-image">
                <img src={pace} alt='running' className="height--full width--full"/>
            </div>
            </div>
            <p className="font-size--xs text--grey-50">count</p>
        </div>


            </div>
            <div className='distance-wrapper p--20 mb--20'>
            <p className='font-size--lg font--bold text--grey-600 mb--10'>Distance</p>
            <div className='flex align-items--center justify-content--center'>
                    <Space size={100} wrap>
                        <Progress type="circle" percent={data.distance} format={(percent) => `${percent} Km`} size={[130, 100]}/>
                    </Space>
            </div>
            </div>
            <div className='weight-wrapper p--20'>
            <p className='font-size--lg font--bold text--grey-600 mb--10'>Weight Lifted per rep</p>
            <div className='flex align-items--center justify-content--center'>
                    <Space size={100} wrap>
                        <Progress type="circle" percent={data.weight_lifted?.average_per_rep} format={(percent) => `${percent} avg`} size={[130, 100]} strokeColor={'#0fd1c7'}/>
                    </Space>
            </div>
            </div>
        </div>
    )
}
export default ActivityDetails;