import React from 'react'
import Button from './../components/button'
import Close from './../components/close'

const Post = () =>
  <div className="writing">
    <Close />
    <form >
      <textarea
        rows="5"
        maxLength="300"
        placeholder="Write your joke..."></textarea>
      <Button
        type="submit">Publish my joke</Button>
    </form>
  </div>

export default Post
