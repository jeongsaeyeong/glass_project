import React from 'react'
import Info from '../../assets/img/title06.png'
import Dest from '../../assets/img/dest.png'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const End = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation('/')
    }

    return (
        <div className='End_wrap container game_wrap'>
            <img src={Info} alt="" className="modify_title" />
            <motion.img
                src={Dest}
                alt="결과 이미지"
                className="glass"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            />
            <div className="btn_box">
                <button className="yes" onClick={() => { onBack() }}>다시하기</button>
            </div>
        </div>
    )
}

export default End
