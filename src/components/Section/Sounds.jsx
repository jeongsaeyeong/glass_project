import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import On from '../../assets/img/sound_on.svg'
import Off from '../../assets/img/sound_off.svg'
import Open from '../../assets/sound/opening.mp3'
import Background from '../../assets/sound/background.mp3'

const Sounds = () => {
    const location = useLocation()
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const prevGlassRef = useRef('__init__')

    const getGlassFromPath = (path) => {
        const match = path.match(/\/(?:game|made|modify|ending|loading)\/([^/]+)/)
        return match ? match[1] : null
    }

    useEffect(() => {
        if (!isPlaying) return

        const currentGlass = getGlassFromPath(location.pathname)

        // 맨 처음 시작할 때는 무조건 재생
        if (prevGlassRef.current !== '__init__' && prevGlassRef.current === currentGlass) return

        const src = currentGlass ? Background : Open

        if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current = null
        }

        const audio = new Audio(src)
        audio.loop = true
        audio.volume = 0.8
        audio.muted = false
        audio.play().catch(e => {
            console.warn("재생 실패:", e)
        })

        audioRef.current = audio
        prevGlassRef.current = currentGlass
    }, [location.pathname, isPlaying])

    const handleSoundToggle = () => {
        if (!isPlaying) {
            setIsPlaying(true) // 음악은 useEffect에서 실행됨
        } else {
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current = null
            }
            prevGlassRef.current = '__init__'
            setIsPlaying(false)
        }
    }

    return (
        <div className="Sounds_wrap">
            <button onClick={handleSoundToggle}>
                <img src={isPlaying ? On : Off} alt="사운드 토글" />
            </button>
        </div>
    )
}

export default Sounds
