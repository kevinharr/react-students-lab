import { studentInfo } from "./data"
import { useState } from "react"
import StudentList from "./StudentList"
import './App.css';



function App() {
  const [studentData, setStudentData] = useState(studentInfo)
  return (
    <StudentList students= {studentData} />
  )

}

export default App;
