import React, { useEffect } from 'react'
import Load from '../../assets/img/loading.png'
import { useNavigate } from 'react-router-dom'

const Loading = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            const randomPath = Math.random() < 0.5 ? '/game/01' : '/game/02'
            navigate(randomPath)
        }, 1000)

        return () => clearTimeout(timer)
    }, [navigate])

    return (
        <div className='Loading_wrap container'>
            <img src={Load} alt="loading" />
        </div>
    )
}

export default Loading
