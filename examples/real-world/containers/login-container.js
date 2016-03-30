import React from 'react'
import {connect} from 'react-redux'

import {login} from './../actions/user-actions'
import Login from './../components/login'

export default connect(null, {
  onSubmit: login
})(Login)
