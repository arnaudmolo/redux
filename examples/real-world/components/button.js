import React from 'react'
import { Link } from 'react-router'

const Button = (props) =>
  <div>
    <Link
      className="button--red publish"
      to='/'
      {...props}
    />
  </div>

export default Button
