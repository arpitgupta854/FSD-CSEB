import React from 'react'
import './student.css'
const Student = (props) => {
  return (
    <div className='icard'>
      <img
  src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
  alt="Young happy businessman standing in an office"
  style={{ height: '120px' }}
/>

       <table>
        <tbody>
            <tr>
                <td colSpan={2}>{props.college}</td>
            </tr>
            <tr><td>Name</td><td>{props.name}</td></tr>
            <tr><td>Branch</td><td>{props.branch}</td></tr>
            <tr><td>RollNo</td><td>{props.rollno}</td></tr>
            <tr><td>Section</td><td>{props.section}</td></tr>
        </tbody>
       </table>
        </div>
  )
}

export default Student