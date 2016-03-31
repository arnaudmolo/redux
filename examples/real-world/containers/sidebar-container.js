import React from 'react'
import { connect } from 'react-redux'
import Sidebar from './../components/sidebar'

import { getUser } from './../selectors'

const SidebarContainer = props => <Sidebar {...props} />

export default connect(state => {
  console.log('ici', getUser(state))
  return getUser(state)
})(SidebarContainer)
