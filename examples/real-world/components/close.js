import React from 'react'
import { Link } from 'react-router'

export default props =>
  <div className="close">
    <Link to='/' {...props}>x</Link>
  </div>
