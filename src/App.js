import React,{useState,useEffect} from 'react'
import NavBar from './components/NavBar'
import { Container, Toolbar, Typography } from '@material-ui/core'

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
        <>
        <NavBar handelAuth={handelAuth} isLoggedIn={ isLoggedIn}/>
        </>
    )
}
export default App