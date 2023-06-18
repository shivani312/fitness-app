import { Progress, Space } from 'antd';

import running from '../../../assets/images/running.png';
import cycling from '../../../assets/images/cycling.png';
import strength from '../../../assets/images/strength-training.png';
import swimming from '../../../assets/images/swimming.png';
import profile from '../../../assets/images/user-image.png';

import { IActivity, IUser } from '../interface/dashboard.interface';
import { ViewIcon } from '../../../shared/components/icons/icons';
import { useNavigate } from 'react-router-dom';

interface IProps {
    data: IUser;
    activity: IActivity[]
}

const UserInfo:React.FC<IProps> = (props) => {
    const {data ,activity} = props;
    const navigate = useNavigate();

    const ImageMapper: {[key:string]: string} = {
        'Running' : running,
        'Cycling': cycling,
        'Strength Training': strength,
        'Swimming': swimming,
    }
    
    return (
            <div className="left-section width--30 bg--white p--20">
            <div className="profile-section flex align-items--center mb--20">
                <div className="profile-image">
                    <img className="height--full width--full" src={profile} alt='profile'/>
                </div>
                <div className='flex flex--column ml--20'>
                <p>{data.name}</p>
                <p>{data.email}</p>
                </div>
            </div>
            <div className='user-info flex justify-content--around p--10 mb--20'>
                <div className='info flex align-items--center justify-content--center flex--column'>
                    <p className='font-size--lg font--bold text--grey-200'>{data.height} cm</p>
                    <p className='font-size--xxs text--grey-200'>Height</p>
                </div>
                <div className='info flex align-items--center justify-content--center flex--column'>
                    <p className='font-size--lg font--bold text--grey-200'>{data.weight} kg</p>
                    <p className='font-size--xxs text--grey-200'>Weight</p>
                </div>
                <div className='info flex align-items--center justify-content--center flex--column'>
                    <p className='font-size--lg font--bold text--grey-200'>{data.age} year</p>
                    <p className='font-size--xxs text--grey-200'>Age</p>
                </div>

            </div>
            <div className='goal-section'>
                <p className='text--grey-600 font--bold mb--20'>Your Goals</p>
                <div className='goal-wrapper flex align-items--center justify-content--between mb--20'>
                    <div className='flex align-items--start'>
                    <div className='dot mr--20 mt--5'/>
                    <div>
                        <p className='font--bold text--grey-200'>Weight Loss</p>
                        <p className='font-size--xxs text--grey-200'>{data.goal.weightLoss} / 20 kg</p>
                    </div>
                    </div>
                    <div>
                    <Space wrap>
                        <Progress type="circle" percent={data.goal.weightLoss * 100/ 20} size="small"/>
                    </Space>
                    </div>
                </div>
                <div className='goal-wrapper-sleep flex align-items--center justify-content--between mb--20'>
                    <div className='flex align-items--start'>
                    <div className='dot-sleep mr--20 mt--5'/>
                    <div>
                        <p className='font--bold text--grey-200'>Sleep</p>
                        <p className='font-size--xxs text--grey-200'>{data.goal.sleep} / 8 hr</p>
                    </div>
                    </div>
                    <div>
                    <Space wrap>
                        <Progress type="circle" percent={data.goal.sleep * 100/ 8} size="small" strokeColor={'#0fd1c7'}/>
                    </Space>
                    </div>
                </div>
                <div className='goal-wrapper-reading flex align-items--center justify-content--between mb--20'>
                    <div className='flex align-items--start'>
                    <div className='dot-reading mr--20 mt--5'/>
                    <div>
                        <p className='font--bold text--grey-200'>Reading</p>
                        <p className='font-size--xxs text--grey-200'>{data.goal.reading} / 2 hr per day</p>
                    </div>
                    </div>
                    <div>
                    <Space wrap>
                        <Progress type="circle" percent={data.goal.reading * 100/ 2} size="small" strokeColor={'#999905'}/>
                    </Space>
                    </div>
                </div>
            </div>
            <div className='activity-section'>
            <p className='text--grey-600 font--bold mb--15'>Your Activity</p>
            <div className='activity'>
            { activity.length > 0 && (
                activity.map((activity,index) => {
                    if(index < 4) {
                        return (
                            <div className='activity-info flex align-items--center justify-content--between mb--10 cursor--pointer' key={index} onClick={() => navigate(`/activity/${activity.id}`)}>
                            <div className='flex align-items--center'>
                            <div className='activity-image mr--20'>
                            <img src={ImageMapper[activity.name]} alt='running' className='height--full width--full'/>
                            </div>
                            <p className='font-size--lg font-semi--bold'>{activity.name}</p>
                            </div>
                            <div className='view-activity flex align-items--center justify-content--center cursor--pointer' > 
                                <ViewIcon className='view-icon'/>
                            </div>
                        </div>
                        )
                    }
                }))
            }
            </div>

            </div>
            </div>
    )
}
export default UserInfo;