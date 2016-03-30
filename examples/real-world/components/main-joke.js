import React from 'react'
import Lettering from './lettering'

const MainJoke = ({joke = {content: ''}}) =>
  <div className="joke-container">
    <h1>
      <Lettering>{joke.content}</Lettering>
    </h1>
  </div>

export default MainJoke
