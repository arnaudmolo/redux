import React from 'react'

const Joke = ({content}) =>
  <li>
    <span>{content}</span>
  </li>

const JokeList = ({jokes}) =>
  <ul>
    {jokes.map((joke, key) => <Joke key={key} {...joke} />)}
  </ul>

const Sidebar = ({jokes}) => {
  return (
      <div className='sidebar'>
        <JokeList jokes={jokes} />
      </div>
  )
}
export default Sidebar
