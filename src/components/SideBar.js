import { Avatar } from '@material-ui/core'
import React from 'react'
import '../styles/sidebar.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

const SideBar = () => {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://source.unsplash.com/bokeh-photography-G9vRDGA46FY" alt="SideBar Top Background" />
                <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0].toUpperCase()}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <div className="sidebar__statNumber">17</div>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <div className="sidebar__statNumber">25</div>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('software engineering')}
                {recentItem('design')}
            </div>
        </div>
    )
}

export default SideBar