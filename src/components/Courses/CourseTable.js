import { TableContainer,Paper, Table, TableHead, TableRow, TableCell,TableBody } from "@material-ui/core";
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { startCourseDetails, startRemoveCourse } from "../../actions/adminActions";

const CourseTable = (props) => {
    const dispatch = useDispatch()
    
    const courses = useSelector((state) => {
        return state.admin.courses
    })

    const handelView = (_id) => {
        dispatch(startCourseDetails(_id))
    }
    const handelRemove = (_id) => {
        dispatch(startRemoveCourse(_id))
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell  style={{fontWeight:600}}>Sl.No</TableCell>
                        <TableCell  style={{fontWeight:600}}>Category</TableCell>
                        <TableCell  style={{fontWeight:600}}>Name</TableCell>
                        <TableCell  style={{fontWeight:600}}>Level</TableCell>
                        <TableCell  style={{fontWeight:600}}>Details</TableCell>
                        <TableCell  style={{fontWeight:600}}>Edit</TableCell>
                        <TableCell  style={{fontWeight:600}}>Delete</TableCell> 
                    </TableRow>
                </TableHead>
                <TableBody>
                    {courses.map((course,index) => {
                        return (
                            <TableRow  key={course._id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{course.category}</TableCell>
                                <TableCell>{course.name}</TableCell>
                                <TableCell>{course.level}</TableCell>
                                <TableCell><button onClick={() => {
                                    handelView(course._id)
                                }}>view</button></TableCell>
                                <TableCell><button>Edit</button></TableCell>
                                <TableCell onClick={() => {
                                    handelRemove(course._id)
                                }}><button>remove</button></TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default CourseTable