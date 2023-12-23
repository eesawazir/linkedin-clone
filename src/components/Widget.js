import React from 'react'
import '../styles/widget.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

const Widget = () => {

    const newsArticle = (heading, subtitle) => (
        <div className='widget__article'>
            <div className="widget__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widget'>
            <div className="widget__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("LinkedIn Clone by Eesa Wazir", "Created using React, Redux and Firebase")}
            {newsArticle("React is the most popular JS library", "Eesa Wazir reports live from his computer")}
            {newsArticle("Learn skills with Coursera and Udemy", "Online platforms for learning")}
            {newsArticle("Medium is a goldmine for developers", "Publishing platform for all aspiring tech enthusiasts")}
        </div>
    )
}

export default Widget