import React, { useEffect, useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import emailjs from '@emailjs/browser'

import HandOne from '../../assets/img/grass_hand01.png'
import HandTwo from '../../assets/img/grass_hand02.png'
import MouthOne from '../../assets/img/grass_mouth01.png'
import MouthTwo from '../../assets/img/grass_mouth02.png'
import FootOne from '../../assets/img/grass_foot01.png'
import FootTwo from '../../assets/img/grass_foot02.png'

const Ending = () => {
    const params = useParams();
    const [Glass, setGlass] = useState(HandOne);
    const [email, setEmail] = useState('');
    const form = useRef();

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
    }, [params.glass, params.made]);

    const onEmail = (e) => {
        e.preventDefault()

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('올바른 이메일 형식을 입력해주세요!');
            return;
        }

        const templateParams = {
            user_email: email,
            message: '당신의 결과 이미지입니다!',
            image_url: window.location.origin + Glass,
        }

        emailjs.send('service_3u5gddi', 'template_tkqtgr6', templateParams, 'S1LpXzuzOfaNgWgyg')
            .then(() => {
                alert('이메일이 전송되었습니다!')
            }, (error) => {
                console.error(error)
                alert('이메일 전송에 실패했습니다.')
            })
    }

    return (
        <div className='Made_wrap container game_wrap'>
            <img src={Glass} alt="결과 이미지" className="glass end_glass" />
            <form ref={form} onSubmit={onEmail} className='input_box'>
                <input
                    type="email"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일을 입력해주세요"
                    required
                />
                <input type="hidden" name="image_url" value={window.location.origin + Glass} />
                <input type="hidden" name="message" value="당신의 결과 이미지입니다!" />
                <button type="submit">전송</button>
                <Link to='/'>다시하기</Link>
            </form>
        </div>
    )
}

export default Ending
