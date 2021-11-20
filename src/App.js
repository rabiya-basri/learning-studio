import React,{useState,useEffect} from 'react'
import NavBar from './components/NavBar'

const App = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const handelAuth = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            handelAuth()
        }
    }, [])
    
    return (
        <div>
            <h1>Learning Studio</h1>
            <NavBar handelAuth={handelAuth} isLoggedIn={ isLoggedIn}/>
        </div>
    )
}
export default App