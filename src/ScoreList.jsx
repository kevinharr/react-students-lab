import Score from "./Score.jsx"

const ScoreList = (props) => {
	return (
  	<>
    	<h4>These are the scores:</h4>
      {props.scores.map(score =>
      <Score key={score.date} score={score}/>
    	)}
    </>
  )
}

export default ScoreList