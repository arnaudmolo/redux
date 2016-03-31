import React from 'react'
import { connect } from 'react-redux'
import JokeList from './../components/joke-list'
import * as JokesActions from './../actions/jokes-actions'

import { getJokes } from './../selectors'

const GetJokesContainer = props => <JokeList {...props} />

export default connect(state => ({jokes: getJokes(state)}), JokesActions)(GetJokesContainer)
