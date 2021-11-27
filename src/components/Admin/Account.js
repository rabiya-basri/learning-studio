import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { startAdminDetails } from '../../actions/adminActions'
import EditAdmin from './EditAdmin'
import { Paper, Typography, Button, Grid,makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px',
    },
    paper: {
        padding: theme.spacing(2),
    }
  }));
const Account = (props) => {
    const classes = useStyles();
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
        <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
            <Typography variant='h5' style={{fontWeight:600,marginTop:'0.5rem'}}>Role: { admin.role}</Typography>
            <Typography>Email: {admin.email}</Typography>
            <Typography>AdminName: {admin.username}</Typography>
            <Typography variant='h5' style={{fontWeight:600,marginTop:'0.5rem'}}>Academy Details</Typography>
            <Typography>Name: {admin.academy?.name}</Typography>
            <Typography>Website: {admin.academy?.website}</Typography>
            </Paper>   
            </Grid>

            <Grid item xs={12} md={8}>
            <Paper className={classes.paper}>
            {toggle ? (<EditAdmin
                email={admin.email}
                adminName={admin.username}
                academyName={admin.academy?.name}
                website={admin.academy?.website}
                toggle={toggle}
                handelToggle={handelToggle}
                />) :
                (
                <Button
                    variant='contained'
                    size='small'
                    color='primary'
                    onClick={handelToggle}
                    style={{marginTop:'0.5rem'}}
                >Edit</Button>
            )}
        
            
            </Paper>
            </Grid>
            
        </Grid>
    )
}
export default Account