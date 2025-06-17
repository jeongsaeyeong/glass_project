import React, { useEffect, useState } from 'react'
import GlassOne from '../../assets/img/grass_normal01.png'
import GlassTwo from '../../assets/img/grass_normal02.png'
import Info from '../../assets/img/text04.png'
import Hand from '../../assets/img/btn_hand.png'
import Mouth from '../../assets/img/btn_mouth.png'
import Foot from '../../assets/img/btn_foot.png'
import Shadow from '../../assets/img/shadow.png'
import HandOne from '../../assets/img/grass_hand01.png'
import HandTwo from '../../assets/img/grass_hand02.png'
import MouthOne from '../../assets/img/grass_mouth01.png'
import MouthTwo from '../../assets/img/grass_mouth02.png'
import FootOne from '../../assets/img/grass_foot01.png'
import FootTwo from '../../assets/img/grass_foot02.png'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

const Game = () => {
    const params = useParams()
    const navigation = useNavigate()
    const [moveLeft, setMoveLeft] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setMoveLeft(true)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    const Going = (root) => {
        navigation(`/loading/${params.glass}/${root}`)
    }

    const GoEnd = () => {
        navigation(`/end`)
    }


    const selectedGlassImage = (() => {
        if (params.modify === 'Hand') {
            return params.glass === '01' ? HandOne : HandTwo
        } else if (params.modify === 'Mouth') {
            return params.glass === '01' ? MouthOne : MouthTwo
        } else if (params.modify === 'Foot') {
            return params.glass === '01' ? FootOne : FootTwo
        } else {
            return params.glass === '01' ? GlassOne : GlassTwo
        }
    })()

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
                    src={selectedGlassImage}
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
                    {params.modify ? (
                        <div className="btn">
                            <img onClick={() => GoEnd()} src={Hand} alt="hand" />
                            <img onClick={() => GoEnd()} src={Mouth} alt="mouth" />
                            <img onClick={() => GoEnd()} src={Foot} alt="foot" />
                        </div>
                    ) : (
                        <div className="btn">
                            <img onClick={() => Going('Hand')} src={Hand} alt="hand" />
                            <img onClick={() => Going('Mouth')} src={Mouth} alt="mouth" />
                            <img onClick={() => Going('Foot')} src={Foot} alt="foot" />
                        </div>
                    )}

                </motion.div>
            </div>
        </div>
    )
}

export default Game
