import React from 'react'
import Lettering from './lettering'

const MainJoke = ({joke = 'There will be a joke there at some point'}) =>
  <div className="joke-container">
    <h1>
      <Lettering>{joke}</Lettering>
    </h1>
  </div>

export default MainJoke
