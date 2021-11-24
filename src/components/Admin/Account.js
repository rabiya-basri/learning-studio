import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { startAdminDetails } from '../../actions/adminActions'
import EditAdmin from './EditAdmin'
import {Container, Typography,Button} from '@material-ui/core'
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
        <Container style={{marginTop:'0.5rem'}}>
            <Typography variant='h5' style={{fontWeight:600,marginTop:'0.5rem'}}>Role: { admin.role}</Typography>
            <Typography>AdminName: {admin.username}</Typography>
            <Typography>Email: {admin.email}</Typography>
            <Typography variant='h5' style={{fontWeight:600,marginTop:'0.5rem'}}>Academy Details</Typography>
            <Typography>Name: {admin.academy?.name}</Typography>
            <Typography>Website: {admin.academy?.website}</Typography>
            {toggle && <EditAdmin />}
            {toggle ?
                <Button variant='contained' size='small'
                    color='secondary' onClick={handelToggle}>close</Button> :
                <Button variant='contained' size='small'
                    color='primary' onClick={handelToggle}
                    style={{marginTop:'0.5rem'}}
                >Edit</Button>
            }
        </Container>
    )
}
export default Account