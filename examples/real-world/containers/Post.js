import { connect } from 'react-redux'
import Post from './../components/post'
import { postJoke } from './../actions/jokes-actions'

export default connect(null, {onSubmit: (e, value) => {
  e.preventDefault()
  return postJoke(value)
}})(Post)
