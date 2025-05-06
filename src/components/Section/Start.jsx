import React from 'react'
import Title from '../../assets/img/text01.png'
import Startbtn from '../../assets/img/btn_start.png'
import { Link } from 'react-router-dom'

const Start = () => {
    return (
        <div className='Start_wrap container'>
            <img src={Title} alt="" className="title" />
            <Link to='/loading'><img src={Startbtn} alt="start_button" /></Link>
        </div>
    )
}

export default Start