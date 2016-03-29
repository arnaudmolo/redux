import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadUser, loadStarred } from '../actions'
import User from '../components/User'
import Repo from '../components/Repo'
import List from '../components/List'
import zip from 'lodash/zip'

function loadData(props) {
  const { login } = props
  props.loadUser(login, [ 'name' ])
  props.loadStarred(login)
}

const renderRepo = ([ repo, owner ]) =>
  <Repo repo={repo}
        owner={owner}
        key={repo.fullName} />

class UserPage extends Component {

  static propTypes = {
    login: PropTypes.string.isRequired,
    user: PropTypes.object,
    starredPagination: PropTypes.object,
    starredRepos: PropTypes.array.isRequired,
    starredRepoOwners: PropTypes.array.isRequired,
    loadUser: PropTypes.func.isRequired,
    loadStarred: PropTypes.func.isRequired
  }

  componentWillMount() {
    loadData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.login !== this.props.login) {
      loadData(nextProps)
    }
  }

  render() {
    const { user, login } = this.props
    if (!user) {
      return <h1><i>Loading {login}’s profile...</i></h1>
    }

    const { starredRepos, starredRepoOwners, starredPagination } = this.props
    return (
      <div>
        <User user={user} />
        <hr />
        <List renderItem={renderRepo}
              items={zip(starredRepos, starredRepoOwners)}
              onLoadMoreClick={() => props.loadStarred(login, true)}
              loadingLabel={`Loading ${login}’s starred...`}
              {...starredPagination} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const { login } = ownProps.params
  const {
    pagination: { starredByUser },
    entities: { users, repos }
  } = state

  const starredPagination = starredByUser[login] || { ids: [] }
  const starredRepos = starredPagination.ids.map(id => repos[id])
  const starredRepoOwners = starredRepos.map(repo => users[repo.owner])

  return {
    login,
    starredRepos,
    starredRepoOwners,
    starredPagination,
    user: users[login]
  }
}

export default connect(mapStateToProps, {
  loadUser,
  loadStarred
})(UserPage)
