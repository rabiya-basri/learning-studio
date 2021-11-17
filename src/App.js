import React from 'react'
import Home from './components/Home'
import { BrowserRouter } from 'react-router-dom'

const App=(props)=>{
    return (
        <div>
            <h1>Learning Studio</h1>
            <BrowserRouter>
                <Home />
            </BrowserRouter> 
        </div>
    )
}
export default App