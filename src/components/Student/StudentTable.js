import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { startGetStudent,startEditStudent, startRemoveStudent } from "../../actions/studentActions";

const StudentTable = (props) => {
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

    const handelDelete = (_id) => {
        dispatch(startRemoveStudent(_id))
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>view Details</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => {
                    return (
                        <tr key= {student._id} >
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td><button onClick={() => {
                                handelStudentView(student._id)
                            }}>View</button></td>
                            <td><button onClick={() => {
                                handelEdit(student._id)
                            }}>Edit</button></td>
                            <td><button onClick={() => {
                                handelDelete(student._id)
                            }}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default StudentTable