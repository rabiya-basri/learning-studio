import React from "react";
import { useSelector } from "react-redux";

const StudentTable = (props) => {
    const students = useSelector((state) => {
        return state.students.data
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>view Details</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => {
                    return (
                        <tr key= {student._id} >
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td><button>View</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default StudentTable