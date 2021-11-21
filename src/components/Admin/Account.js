import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { startAdminDetails } from '../../actions/adminActions'
import EditAdmin from './EditAdmin'

const Account = (props) => {
    const dispatch = useDispatch()

    const [toggle,setToggle]=useState(false)
    
    useEffect(() => {
        dispatch(startAdminDetails())
    }, [])
    
    const admin = useSelector((state) => {
        return state.admin.data
    })
    
    const handelToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            {toggle && <EditAdmin />}
            {toggle ?
                <button onClick={handelToggle}>close</button> :
                <button onClick={handelToggle}>Edit</button>
            }
            <h3>Role: { admin.role}</h3>
            <p>Username: {admin.username}</p>
            <p>Email: {admin.email}</p>
            <h3>Academy Details</h3>
            <p>Name: {admin.academy?.name}</p>
            <p>Website: { admin.academy?.website}</p>
        </div>
    )
}
export default Account