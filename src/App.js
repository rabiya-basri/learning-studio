import React,{useState,useEffect} from 'react'
import NavBar from './components/NavBar'
import { useDispatch } from 'react-redux'
import  jwt_decode from 'jwt-decode'
import { startLoginStudent } from './actions/adminActions'
import { startAdminDetails, startAdminLogin } from './actions/adminActions'
import { Divider } from '@material-ui/core'
const App = (props) => {
    const dispatch=useDispatch()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const handelAuth = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    useEffect(() => {
        const token=localStorage.getItem('token')
        if (token) {
            if (jwt_decode(token).role==='admin') {
                dispatch(startAdminDetails)
                handelAuth()
            } else {
                dispatch(startLoginStudent)
                handelAuth()
            }
        }
       
    }, [])
    
    return (
        <>
            <NavBar handelAuth={handelAuth} isLoggedIn={isLoggedIn} />
        </>
    )
}
export default App