import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, teamName, teamImageUrl} = teamCardDetails

  return (
    <Link to={`/team-matches/${id}`} className="linkClass">
      <li className="listContainer">
        <img src={teamImageUrl} alt={teamName} className="teamCardImage" />
        <p className="teamCardTeamName">{teamName}</p>
      </li>
    </Link>
  )
}

export default TeamCard
