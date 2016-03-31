import React from 'react'
import Button from './../components/button'
import Close from './../components/close'
import Form from './../components/Form'

const Post = ({onSubmit}, value, target) =>
  <div className="writing">
    <Close />
    <Form onSubmit={_ => onSubmit(value)}>
      <textarea
        onChange={e => value = e.nativeEvent.target.value}
        rows="5"
        maxLength="300"
        placeholder="Write your joke..."></textarea>
      <button
        className="button--red publish"
        type="submit">Publish my joke</button>
    </Form>
  </div>

export default Post
