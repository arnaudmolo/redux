import React from 'react'
import { connect } from 'react-redux'
import Sidebar from './../components/sidebar'

import { getUserJokes } from './../selectors'

const SidebarContainer = props => <Sidebar {...props} />

export default connect(state => {
  return getUserJokes(state)
})(SidebarContainer)
