import {Link} from 'react-router-dom'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardData()
  }

  getTeamCardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const updatedData = teams.map(eachTeam => ({
      id: eachTeam.id,
      teamName: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teamsList: updatedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <Link to="/" className="homeBgContainer">
        <div className="iplHeadingContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="iplLogo"
          />
          <h1 className="HomeIplHeading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="teamCardsContainer">
            {teamsList.map(eachTeam => (
              <TeamCard teamCardDetails={eachTeam} key={eachTeam.id} />
            ))}
          </ul>
        )}
      </Link>
    )
  }
}

export default Home
