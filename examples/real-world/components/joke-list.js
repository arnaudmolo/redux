import React from 'react'
import Joke from './joke'

export default ({jokes = [{content: 'a la bonne blague', voted: false}]}) =>
  <ul className="jokes-list">
    {jokes.map((joke, key) =>
      <li key={key}>
        <Joke joke={joke} />
      </li>
    )}
  </ul>
