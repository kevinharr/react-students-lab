const Student = (props) => {
	return (
    <> 
      <h3>{props.student.name}</h3>
      <h3>{props.student.bio}</h3>
    </>
  )
}
  
export default Student