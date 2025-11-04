import React, {Component} from 'react';


class StudentList extends Component{
    render(){
        return(
            <div>
                <h2>Students Table: </h2>

                <table border="1" cellPadding="5">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Grade</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.students.map(student=>(
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.grade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default StudentList