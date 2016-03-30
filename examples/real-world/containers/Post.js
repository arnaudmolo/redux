import React from 'react'
import { connect } from 'react-redux'
import Post from './../components/post'
import { postJoke } from './../actions/jokes-actions'
import Sidebar from '../components/Sidebar'

function mapStateToProps (state) {
  return state.user
}

export default connect(mapStateToProps, {onSubmit: (e, value) => {
  e.preventDefault()
  return postJoke(value)
}})(props => {
  console.log('et ben alors')
  if (props.connected) {
    return <Post {...props} />
  } else {
    return <Sidebar />
  }
})
