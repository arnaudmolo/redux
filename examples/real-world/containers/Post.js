import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Post from './../components/post'
import { postJoke } from './../actions/jokes-actions'
import Sidebar from '../components/Sidebar'

function mapStateToProps (state) {
  return state.user
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onSubmit: async value => {
      await dispatch(postJoke(value))
      dispatch(push("/"))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(props =>
  props.connected ? <Post {...props} /> : <Sidebar />
)
