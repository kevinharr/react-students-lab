import ScoreList from "./ScoreList.jsx"
const Student = (props) => {
	console.log(props)
	return (
    <> 
      <h3>{props.student.name}</h3>
      <h3>{props.student.bio}</h3>
			<ScoreList scores={props.student.scores}/>
	
    </>
  )
}
  
export default Student