import React from 'react'
import Student from './Student';
const App = () => {
  const h1=<h1>helloworld</h1>;
  const mystyle={
    Color:'red',
    backgroundColor:'yellow'
  }
  return (
    <div style={{backgroundColor:"red"}}>{h1}
    <div style={mystyle}>
      ABES ENGINEERING COLLEGE
    </div>
    <Student college="ABES ENGINEERING COLLEGE" name="rahul" branch="CSE" section="B" rollno="2200320"/>
    <Student college="ABES ENGINEERING COLLEGE" name="rahul" branch="CSE" section="B" rollno="2200320"/>
    </div>
  )
}

export default App