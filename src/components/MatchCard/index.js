import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const competingTeamUrl = recentMatchDetails.competing_team_logo
  const competingTeam = recentMatchDetails.competing_team
  const matchStatus = recentMatchDetails.match_status
  const {result} = recentMatchDetails

  const color = matchStatus === 'Lost' ? 'red' : ''

  return (
    <li className="matchCardContainer">
      <img
        src={competingTeamUrl}
        alt={`competing team ${competingTeam}`}
        className="competingTeamImage"
      />
      <p className="competingTeamHeading">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`status ${color}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
