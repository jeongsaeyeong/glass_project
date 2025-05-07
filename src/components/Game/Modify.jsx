import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Info from '../../assets/img/text02.png'
import Yes from '../../assets/img/btn_yes.png'
import No from '../../assets/img/btn_no.png'
import HandOne from '../../assets/img/grass_hand01.png'
import HandTwo from '../../assets/img/grass_hand02.png'
import MouthOne from '../../assets/img/grass_mouth01.png'
import MouthTwo from '../../assets/img/grass_mouth02.png'
import FootOne from '../../assets/img/grass_foot01.png'
import FootTwo from '../../assets/img/grass_foot02.png'

const Modify = () => {
    const params = useParams();
    const [Glass, setGlass] = useState(HandOne);
    const navigation = useNavigate();

    useEffect(() => {
        if (params.glass === '01' && params.made === 'Hand') {
            setGlass(HandOne)
        } else if (params.glass === '02' && params.made === 'Hand') {
            setGlass(HandTwo)
        } else if (params.glass === '01' && params.made === 'Mouth') {
            setGlass(MouthOne)
        } else if (params.glass === '02' && params.made === 'Mouth') {
            setGlass(MouthTwo)
        } else if (params.glass === '01' && params.made === 'Foot') {
            setGlass(FootOne)
        } else if (params.glass === '02' && params.made === 'Foot') {
            setGlass(FootTwo)
        }
    }, [params.glass, params.made])

    const GoingEnd = () => {
        navigation('/end')
    }

    const onBack = () =>{
        navigation(-1)
    }

    return (
        <div className='Made_wrap container game_wrap'>
            <img src={Info} alt="" className="modify_title" />
            <img src={Glass} alt="결과 이미지" className="glass" />
            <div className="btn_box">
                <button className="yes" onClick={() => { GoingEnd() }}><img src={Yes} alt="" /></button>
                <button className="no" onClick={() => { onBack() }}><img src={No} alt="" /></button>
            </div>
        </div>
    )
}

export default Modify