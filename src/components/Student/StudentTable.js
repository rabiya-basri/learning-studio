import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { startGetStudent } from "../../actions/studentActions";

const StudentTable = (props) => {
    const dispatch = useDispatch()
    
    const students = useSelector((state) => {
        return state.students.data
    })

    const handelStudentView = (_id) => {
        dispatch(startGetStudent(_id))
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>view Details</th>
                    <th>Edit</th>
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
                            <td><button>Edit</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default StudentTable