import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useDispatch} from 'react-redux';
import {auth} from './firebase';
import { logout } from './features/userSlice';

export default function Header () {
  const dispatch = useDispatch ();

  const logoutOfApp = () => {
    dispatch (logout ());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1613168114~hmac=2f326c0bea14c1e9ca64893dd0f2af39"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption onClick={logoutOfApp} avatar="/static/images/avatar/1.jpg" title="me" />
      </div>
    </div>
  );
}
