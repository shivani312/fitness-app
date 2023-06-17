import profile from '../../../assets/images/profile-placeholder.png'

import { NotificationIcon } from '../icons/icons';

import fitnessData from '../../../assets/JASONDATA/fitnessData.json';

const Header: React.FC = () => {

	return (
		<>
		<div className="header flex align-items--center justify-content--between">
			<div className='ml--20'>
				<p>{`Hello, ${fitnessData.user.name}!`}</p>
			</div>
			<div className="action-wrapper flex align-items--center">
			<div className='notification position--relative flex align-items--center justify-content--center mr--10'>
				<NotificationIcon className='width--18px fill--grey-600'/>
				<div className='total-notification position--absolute text--white bg--red border-radius--half flex align-items--center justify-content--center font-size--xxs font--bold'/>
			</div>
				<div className='profile flex align-items--center justify-content--center mr--10'>
					<img src={profile} className='height--full width--full' alt='profile'/>
				</div>
				<p>{fitnessData.user.name}</p>
			</div>
		</div>
		</>
	);
};
export default Header;
