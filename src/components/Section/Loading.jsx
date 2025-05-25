import React, { useEffect, useState } from 'react'
import Loading01 from '../../assets/img/loading01.PNG'
import Loading02 from '../../assets/img/loading02.PNG'
import Loading03 from '../../assets/img/loading03.PNG'
import Loading04 from '../../assets/img/loading04.PNG'
import { useNavigate } from 'react-router-dom'

const images = [Loading01, Loading02, Loading03, Loading04]

const Loading = () => {
    const navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % images.length)
        }, 300)

        const timer = setTimeout(() => {
            const randomPath = Math.random() < 0.5 ? '/game/01' : '/game/02'
            navigate(randomPath)
        }, 2000)

        return () => {
            clearInterval(interval)
            clearTimeout(timer)
        }
    }, [navigate])

    return (
        <div className='Loading_wrap container'>
            <img src={images[currentIndex]} alt="loading" />
        </div>
    )
}

export default Loading
