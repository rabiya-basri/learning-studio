import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { startGetStudent,startEditStudent, startRemoveStudent } from "../../actions/studentActions";
import { TableContainer,Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import EditStudent from "./EditStudent";

const StudentTable = (props) => {
    const[toggel,setToggel]=useState(false)
    
    const handelToggel = () => {
        setToggel(!toggel)
    }
    const dispatch = useDispatch()
    
    const students = useSelector((state) => {
        return state.students.data
    })

    const handelStudentView = (_id) => {
        dispatch(startGetStudent(_id))
    }

    const handelEdit = (_id) => {
        dispatch(startEditStudent(_id))
    }

    const handelDelete = ( _id) => {
        dispatch(startRemoveStudent(_id))
    }
    
    return (
        <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell style={{fontWeight:600}}>Sl.no</TableCell>
                    <TableCell style={{fontWeight:600}}>Name</TableCell>
                    <TableCell style={{ fontWeight: 600 }}>Email</TableCell>
                    <TableCell style={{fontWeight:600}}>view Details</TableCell>
                    <TableCell style={{fontWeight:600}}>Edit</TableCell>
                    <TableCell style={{fontWeight:600}}>Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {students.map((student,i) => {
                    return (
                        <TableRow key={student._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{i + 1}</TableCell>
                            <TableCell>{student.name}</TableCell>
                            <TableCell>{student.email}</TableCell> 
                            <TableCell>
                            <VisibilityIcon color="action" onClick={() => {
                                    handelStudentView(student._id)
                                }}></VisibilityIcon>  
                            </TableCell>
                            <TableCell>
                                <EditIcon color="action" onClick={() => {
                                    handelEdit(student._id)
                                    handelToggel()
                                }}></EditIcon>
                            </TableCell>
                            <TableCell>
                                <DeleteIcon color="action" onClick={() => {
                                handelDelete(student._id)
                                }}></DeleteIcon>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
        </TableContainer>
        {toggel && <EditStudent />}
    </>
    )
}
export default StudentTable