import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'

const App=(props)=>{
    return (
        <div>
            <h1>Learning Studio</h1>
            <BrowserRouter>
                <NavBar />
            </BrowserRouter> 
        </div>
    )
}
export default App