import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerImage: '',
    latestMatchData: {},
    recentMatchesData: [],
    isLoading: true,
    id: '',
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const recentMatches = data.recent_matches
    console.log(recentMatches)

    this.setState({
      teamBannerImage: teamBannerUrl,
      latestMatchData: latestMatchDetails,
      recentMatchesData: recentMatches,
      isLoading: false,
      id,
    })
  }

  render() {
    const {
      teamBannerImage,
      latestMatchData,
      recentMatchesData,
      isLoading,
      id,
    } = this.state

    let bgColorOfTeam

    if (id === 'RCB') {
      bgColorOfTeam = 'rcb'
    }
    if (id === 'KKR') {
      bgColorOfTeam = 'kkr'
    }
    if (id === 'KXP') {
      bgColorOfTeam = 'kxp'
    }
    if (id === 'CSK') {
      bgColorOfTeam = 'csk'
    }
    if (id === 'RR') {
      bgColorOfTeam = 'rr'
    }
    if (id === 'MI') {
      bgColorOfTeam = 'mi'
    }
    if (id === 'SH') {
      bgColorOfTeam = 'sh'
    }
    if (id === 'DC') {
      bgColorOfTeam = 'dc'
    }

    return (
      <div className={`teamMatchesBgContainer ${bgColorOfTeam}`}>
        {isLoading && (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        )}

        {!isLoading && (
          <>
            <img
              src={teamBannerImage}
              alt="team banner"
              className="teamBannerImage"
            />
            <h1 className="latestMatchesHeading">Latest Matches</h1>
            <LatestMatch latestMatchData={latestMatchData} />
            <ul className="unorderedListRecentMatches">
              {recentMatchesData.map(eachMatch => (
                <MatchCard recentMatchDetails={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
