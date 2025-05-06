import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Start from './components/Section/Start'
import Game from './components/Game/Game'
import Loading from './components/Section/Loading'
import Made from './components/Game/Made'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Start />}/>
                <Route path='/loading' element={<Loading />}/>
                <Route path='/game/:glass' element={<Game />}/>
                <Route path='/made/:glass/:made' element={<Made />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App