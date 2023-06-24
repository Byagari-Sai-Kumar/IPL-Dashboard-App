import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {date, result, umpires, venue} = latestMatchData
  const competingTeam = latestMatchData.competing_team
  const competingTeamLogo = latestMatchData.competing_team_logo
  const firstInnings = latestMatchData.first_innings
  const manOfTheMatch = latestMatchData.man_of_the_match
  const secondInnings = latestMatchData.second_innings

  return (
    <div className="latestMatchCardContainer">
      <div className="section1Container">
        <div className="section11Container">
          <p className="teamName">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="teamWonBy">{result}</p>
        </div>
        <div className="competingImageContainer">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competingTeamImage"
          />
        </div>
      </div>
      <div className="section2Container">
        <h1 className="questions">First Innings</h1>
        <p className="answers">{firstInnings}</p>
        <h1 className="questions">Second Innings</h1>
        <p className="answers">{secondInnings}</p>
        <h1 className="questions">Man Of The Match</h1>
        <p className="answers">{manOfTheMatch}</p>
        <h1 className="questions">Umpires</h1>
        <p className="answers">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
