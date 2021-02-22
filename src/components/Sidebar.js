import { Avatar } from '@material-ui/core';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import React from 'react';
import "../assets/Sidebar.css";

function Sidebar() {
    const user = useSelector(selectUser);
    
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
                <Avatar src={user.photoUrl} className="siderbar__avatar">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>         
            </div>

            <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <p>Who viewed you</p>
                        <p className="sidebar__statNumber"> 2,334</p>
                    </div>
                    <div className="sidebar__stat">
                        <p>Views on post</p>
                        <p className="sidebar__statNumber">2,201</p>                      
                    </div>
            </div>

            <div className="sidebar__bottom">
                    <p>Recent</p>
                    {recentItem('reactjs')}
                    {recentItem('programming')}
                    {recentItem('softwareengineering')}
                    {recentItem('design')}
                    {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar;
