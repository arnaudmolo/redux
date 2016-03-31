import React from 'react'
import UserRegistration from '../components/user-registration'

const Joke = ({content}) =>
  <li>
    <span>{content}</span>
  </li>

const JokeList = ({jokes}) =>
  <ul>
    {jokes.map((joke, key) => <Joke key={key} {...joke} />)}
  </ul>

const Sidebar = ({jokes, connected}) =>
  <div className='sidebar'>
    <JokeList jokes={jokes} />
    {connected ? [] : <UserRegistration />}
  </div>

export default Sidebar
