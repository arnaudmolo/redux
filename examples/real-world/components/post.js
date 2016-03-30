import React from 'react'
import Button from './../components/button'
import Close from './../components/close'

const Post = ({onSubmit, value}) =>
  <div className="writing">
    <Close />
    <form onSubmit={e => onSubmit(e, value)}>
      <textarea
        onChange={e => value = e.nativeEvent.target.value}
        rows="5"
        maxLength="300"
        placeholder="Write your joke..."></textarea>
      <button
        className="button--red publish"
        type="submit">Publish my joke</button>
    </form>
  </div>

export default Post
