import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { startAdminDetails } from '../../actions/adminActions'

const Account = (props) => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(startAdminDetails())
    }, [])
    
    const admin = useSelector((state) => {
        return state.admin.data
    })
    
    return (
        <div>
            <h1>User Details</h1>
            <button>Edit</button>
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