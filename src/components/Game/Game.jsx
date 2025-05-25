import React, { useEffect, useState } from 'react'
import GlassOne from '../../assets/img/grass_normal01.png'
import GlassTwo from '../../assets/img/grass_normal02.png'
import Info from '../../assets/img/text04.png'
import Hand from '../../assets/img/btn_hand.png'
import Mouth from '../../assets/img/btn_mouth.png'
import Foot from '../../assets/img/btn_foot.png'
import Shadow from '../../assets/img/shadow.png'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

const Game = () => {
    const params = useParams();
    const navigation = useNavigate();
    const [moveLeft, setMoveLeft] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMoveLeft(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const Going = (root) => {
        navigation(`/made/${params.glass}/${root}`);
    }

    return (
        <div className='Game_wrap container game_wrap'>
            <div className="game_inner">
                <motion.img
                    src={Shadow}
                    alt="그림자"
                    className="shadow"
                    initial={{ opacity: 0, x: 265 }}
                    animate={{
                        opacity: 1,
                        x: moveLeft ? 115 : 0
                    }}
                    transition={{
                        opacity: { duration: 0.3 },
                        x: { delay: 3, duration: 0.5, ease: 'easeOut' }
                    }}
                />
                <motion.img
                    src={params.glass === '01' ? GlassOne : GlassTwo}
                    alt="glass"
                    className="glass-image"
                    initial={{ opacity: 0, x: 200 }}
                    animate={{
                        opacity: 1,
                        x: moveLeft ? 50 : 250,
                        y: [-40, 0, -40]
                    }}
                    transition={{
                        opacity: { duration: 0.3 },
                        x: { delay: 3, duration: 0.5, ease: 'easeOut' },
                        y: {
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }
                    }}
                />

                <motion.div
                    className="button_wrap"
                    initial={{ x: 100, opacity: 0 }}
                    animate={moveLeft ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 3, duration: 0.5, ease: 'easeOut' }}
                >
                    <img src={Info} alt="info" className="info" />
                    <div className="btn">
                        <img onClick={() => Going('Hand')} src={Hand} alt="hand" />
                        <img onClick={() => Going('Mouth')} src={Mouth} alt="mouth" />
                        <img onClick={() => Going('Foot')} src={Foot} alt="foot" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Game
