import React from 'react'
import { connect } from 'react-redux'

import { getLastJoke } from './../selectors'
import MainJoke from './../components/main-joke'

export default connect(state => ({joke: getLastJoke(state)}) || {})(MainJoke)
