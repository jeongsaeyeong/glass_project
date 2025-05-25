import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import Info from '../../assets/img/text03.png'
import Yes from '../../assets/img/btn_yes.png'
import No from '../../assets/img/btn_no.png'

import HandOne from '../../assets/img/grass_hand01.png'
import HandTwo from '../../assets/img/grass_hand02.png'
import MouthOne from '../../assets/img/grass_mouth01.png'
import MouthTwo from '../../assets/img/grass_mouth02.png'
import FootOne from '../../assets/img/grass_foot01.png'
import FootTwo from '../../assets/img/grass_foot02.png'

import handSound from '../../assets/sound/hand.m4a'
import mouthSound from '../../assets/sound/mouth.m4a'
import footSound from '../../assets/sound/foot.m4a'

const Made = () => {
    const params = useParams();
    const navigation = useNavigate();
    const [Glass, setGlass] = useState(HandOne);

    useEffect(() => {
        let selectedGlass;
        let sound;

        if (params.glass === '01' && params.made === 'Hand') {
            selectedGlass = HandOne;
            sound = handSound;
        } else if (params.glass === '02' && params.made === 'Hand') {
            selectedGlass = HandTwo;
            sound = handSound;
        } else if (params.glass === '01' && params.made === 'Mouth') {
            selectedGlass = MouthOne;
            sound = mouthSound;
        } else if (params.glass === '02' && params.made === 'Mouth') {
            selectedGlass = MouthTwo;
            sound = mouthSound;
        } else if (params.glass === '01' && params.made === 'Foot') {
            selectedGlass = FootOne;
            sound = footSound;
        } else if (params.glass === '02' && params.made === 'Foot') {
            selectedGlass = FootTwo;
            sound = footSound;
        }

        if (selectedGlass) {
            setGlass(selectedGlass);
        }

        if (sound) {
            const audio = new Audio(sound);
            audio.play().catch((e) => {
                console.warn("Sound playback failed:", e);
            });
        }
    }, [params.glass, params.made]);

    const GoingModify = () => {
        navigation(`/modify/${params.glass}/${params.made}`);
    }

    const GoingEnding = () => {
        navigation(`/ending/${params.glass}/${params.made}`);
    }

    return (
        <div className='Made_wrap container game_wrap'>
            <img src={Info} alt="" className="title" />
            <motion.img
                src={Glass}
                alt="결과 이미지"
                className="glass"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            />
            <div className="btn_box">
                <button className="yes" onClick={GoingEnding}>
                    <img src={Yes} alt="확인" />
                </button>
                <button className="no" onClick={GoingModify}>
                    <img src={No} alt="수정" />
                </button>
            </div>
        </div>
    )
}

export default Made
