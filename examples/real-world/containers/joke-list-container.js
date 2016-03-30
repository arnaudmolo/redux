import React from 'react'
import { connect } from 'react-redux'
import JokeList from './../components/joke-list'
import * as JokesActions from './../actions/jokes-actions'

class GetJokesContainer extends React.Component {

  componentWillMount () {
    this.props.fetchJokes()
  }

  render (props = this.props) {
    return <JokeList jokes={props.jokes} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    jokes: []
  }
}

export default connect(mapStateToProps, JokesActions)(GetJokesContainer)
