import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Start from './components/Section/Start'
import Game from './components/Game/Game'
import Loading from './components/Section/Loading'
import Made from './components/Game/Made'
import Modify from './components/Game/Modify'
import End from './components/Game/End'
import Ending from './components/Game/Ending'
import Sounds from './components/Section/Sounds'

const App = () => {
    return (
        <BrowserRouter>
            <Sounds />
            <Routes>
                <Route path='/' element={<Start />}/>
                <Route path='/loading' element={<Loading />}/>
                <Route path='/loading/:glass/:made' element={<Loading />}/>
                <Route path='/end' element={<End />}/>
                <Route path='/game/:glass' element={<Game />}/>
                <Route path='/game/:glass/:modify' element={<Game />}/>
                <Route path='/made/:glass/:made' element={<Made />}/>
                <Route path='/modify/:glass/:made' element={<Modify />}/>
                <Route path='/ending/:glass/:made' element={<Ending />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App