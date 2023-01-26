import { studentInfo } from "./data"
import { useState } from "react"
import StudentList from "./StudentList"
import './App.css';



function App() {
  // const [studentData] = useState(studentInfo)
  return (
    <StudentList students= {studentInfo} />
  )

}

export default App;
