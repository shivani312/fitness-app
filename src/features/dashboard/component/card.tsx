import heartbeat from '../../../assets/images/heart-beat.png';
import calories from '../../../assets/images/calories.png';
import running from '../../../assets/images/running.png';
import { IUser } from '../interface/dashboard.interface';

interface IProps {
    data: IUser
}

const Card:React.FC<IProps> = (props) => {

    const { data } = props;

    return (
        <div className="avg-section-wrapper mb--20 width--full flex">
        <div className="avg-section bg--white p--15">
            <div className="flex justify-content--between">
                <div className="flex flex--column">
            <p className="text--grey-400">Heart Rate</p>
            <p className="font-size--24 font--bold">
                {data.avg_heart_rate}
            </p>
                </div>
            <div className="avg-section-image">
                <img src={heartbeat} alt='heartbeat' className="height--full width--full"/>
            </div>
            </div>
            <p className="font-size--xs text--grey-50">Beats per minute</p>
        </div>
        <div className="avg-section bg--white p--15">
            <div className="flex justify-content--between">
                <div className="flex flex--column">
            <p className="text--grey-400">Calories burned</p>
            <p className="font-size--24 font--bold">
                {data.avg_calories_burned}
            </p>
                </div>
            <div className="avg-section-image">
                <img src={calories} alt='calories' className="height--full width--full"/>
            </div>
            </div>
            <p className="font-size--xs text--grey-50">kilocalories</p>
        </div>
        <div className="avg-section bg--white p--15">
            <div className="flex justify-content--between">
                <div className="flex flex--column">
            <p className="text--grey-400">Step</p>
            <p className="font-size--24 font--bold">
                {data.avg_step}
            </p>
                </div>
            <div className="avg-section-image">
                <img src={running} alt='running' className="height--full width--full"/>
            </div>
            </div>
            <p className="font-size--xs text--grey-50">counts</p>
        </div>
        </div>
    )
};

export default Card;