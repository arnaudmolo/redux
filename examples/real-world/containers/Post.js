import React from 'react'

const Post = () =>
  <div className="writing">
    <div className="close">
      <span>x</span>
    </div>
    <form >
      <textarea
        ref="joke"
        rows="5"
        maxLength="300"
        placeholder="Write your joke..."></textarea>
      <button
        type="submit"
        className="button--red publish" > Publish my joke
      </button>
    </form>
  </div>

export default Post
