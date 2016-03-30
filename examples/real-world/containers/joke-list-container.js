import React from 'react'
import { connect } from 'react-redux'
import JokeList from './../components/joke-list'
import * as JokesActions from './../actions/jokes-actions'

import { getJokes } from './../selectors'

class GetJokesContainer extends React.Component {

  componentWillMount () {
    this.props.fetchJokes()
  }

  render (props = this.props) {
    return <JokeList {...props} />
  }
}

export default connect(state => ({jokes: getJokes(state)}), JokesActions)(GetJokesContainer)
