import React, { useEffect, useState } from 'react'
import GlassOne from '../../assets/img/grass_normal01.png'
import GlassTwo from '../../assets/img/grass_normal02.png'
import Info from '../../assets/img/text04.png'
import Hand from '../../assets/img/btn_hand.png'
import Mouth from '../../assets/img/btn_mouth.png'
import Foot from '../../assets/img/btn_foot.png'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

const Game = () => {
    const params = useParams();
    const navigation = useNavigate();
    const [showButton, setShowButton] = useState(false);
    const [animateGlass, setAnimateGlass] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateGlass(true)
            setShowButton(true)
        }, 2000)

        return () => clearTimeout(timer)
    }, []);

    const Going = (root) => {
        navigation(`/made/${params.glass}/${root}`);
    }

    return (
        <div className='Game_wrap container game_wrap'>
            <div>
                <motion.img
                    src={params.glass === '01' ? GlassOne : GlassTwo}
                    alt=""
                    className="glass-image"
                    animate={animateGlass ? { y: -30 } : {}}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: 'reverse', // 반대 방향으로 반복
                        ease: 'easeInOut' // 부드럽게
                    }}
                />
                <div className={`button_wrap ${showButton ? 'show' : 'hidden'}`}>
                    <img src={Info} alt="" className="info" />
                    <div className="btn">
                        <img onClick={() => { Going('Hand') }} src={Hand} alt="" />
                        <img onClick={() => { Going('Mouth') }} src={Mouth} alt="" />
                        <img onClick={() => { Going('Foot') }} src={Foot} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game
