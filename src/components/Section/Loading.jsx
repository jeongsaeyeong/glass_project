import React, { useEffect, useState } from 'react'
import Loading01 from '../../assets/img/loading01.PNG'
import Loading02 from '../../assets/img/loading02.PNG'
import Loading03 from '../../assets/img/loading03.PNG'
import Loading04 from '../../assets/img/loading04.PNG'
import handSound from '../../assets/sound/hand.m4a'
import mouthSound from '../../assets/sound/mouth.m4a'
import footSound from '../../assets/sound/foot.m4a'
import { useNavigate, useParams } from 'react-router-dom'

const images = [Loading01, Loading02, Loading03, Loading04]

const Loading = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % images.length)
        }, 300)

        let timer

        if (params.made) {
            // made 있을 때
            timer = setTimeout(() => {
                navigate(`/made/${params.glass}/${params.made}`)
            }, 5000)
        } else {
            // made 없을 때
            timer = setTimeout(() => {
                const randomPath = Math.random() < 0.5 ? '/game/01' : '/game/02'
                navigate(randomPath)
            }, 2000)
        }

        return () => {
            clearInterval(interval)
            clearTimeout(timer)
        }
    }, [navigate, params.glass, params.made])

    useEffect(() => {
        let audio

        if (params.made) {
            if (params.made === 'Hand') {
                audio = new Audio(handSound)
            } else if (params.made === 'Mouth') {
                audio = new Audio(mouthSound)
            } else {
                audio = new Audio(footSound)
            }

            audio.volume = 1.0
            audio.play().catch((err) => {
                console.warn('Autoplay prevented:', err)
            })
        }

        return () => {
            if (audio) {
                audio.pause()
                audio = null
            }
        }
    }, [params.made])

    return (
        <div className={`Loading_wrap container ${params.made ? 'game_wrap' : ''}`}>
            <img src={images[currentIndex]} alt="loading" />
        </div>
    )
}

export default Loading
