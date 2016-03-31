import React from 'react'

const preventAnd = cb => e => {
  e.preventDefault()
  return cb()
}

const Form = (props) => <form {...props} onSubmit={preventAnd(props.onSubmit)} />

export default Form
