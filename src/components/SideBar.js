import { Avatar } from '@material-ui/core'
import React from 'react'
import '../styles/sidebar.css'

const SideBar = () => {

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
                <Avatar className='sidebar__avatar' />
                <h2>Eesa Wazir</h2>
                <h4>eesa.wazir5@gmail.com</h4>
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