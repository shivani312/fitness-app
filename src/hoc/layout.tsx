/* eslint-disable react/jsx-no-bind */
import React from "react";
import { Link, useLocation } from "react-router-dom";

import logo from '../assets/images/logo.png';

import withRouter from "./withRouter";
import Header from "../shared/components/header/header";
import { DashboardIcon, NavCollapseIcon, UserIcon } from "../shared/components/icons/icons";

const Layout: React.FC<React.PropsWithChildren> = (props) => {
	const location = useLocation();

    const toggleSidebar = () => {
		document.body && document.body.classList.toggle('mini-navbar');
	};

	const activeClass = (name:string) => {
		if(name === location.pathname) {
			return 'active'
		}
		else if (location.pathname === '/activity/activity_2'){
			return 'active'
		}
		else if (location.pathname === '/activity/activity_3') {
			return 'active'
		}
		else if (location.pathname === '/activity/activity_4') {
			return 'active'
		}
		else {
			return ''
		}
	}

    return (
        <>
            <div className="app-main-wrapper">
            <div className="sidebar flex flex--column justify-content--start pt--30">
			<div className='flex align-items--center justify-content--center'>
				<div className='image-wrapper mr--20'>
				<img src={logo} alt='logo' className='height--full width--full'/>
				</div>
				<h3 className='title'>Fitment</h3>
			</div>
			<div className='flex flex--column'>
			<div className='mt--10 mb--20'>
					<div  onClick={toggleSidebar} className='nav-collapse flex align-items--center justify-content--center cursor--pointer ml--auto'>
						<NavCollapseIcon className='fill--white width--18px' />
					</div>
			</div>
			<ul className='nav-list  mb--0 mt--0'>
			<li>
			<Link to='/dashboard' className={`nav flex align-items--center justify-content--between ${activeClass('/dashboard')}`}>
				<div className='flex align-items--center'>
					<DashboardIcon className='nav-icon width--18px fill--grey-600'/>
					<span className='nav-label text--capitalize ml--15 text--grey-400'>
						Dashboard
					</span>
				</div>
			</Link>
			</li>
			<li>
			<Link to='/activity/activity_1' className={`nav flex align-items--center justify-content--between ${activeClass('/activity/activity_1')}`}>
				<div className='flex align-items--center'>
					<UserIcon className='nav-icon width--18px fill--grey-600'/>
					<span className='nav-label text--capitalize ml--15 text--grey-400'>
						Activities
					</span>
				</div>
			</Link>
			</li>
			</ul>
			</div>
		    </div>
            <div className='page-wrapper'>
                <Header/>
				{props.children}
            </div>
            </div>
        </>
    );
};

export default withRouter(Layout);
