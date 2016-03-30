import React from 'react'
import color from 'color'
import cx from 'classnames'
import stringToColor from './../utils/string-to-color'

function jokeColor (joke) {

  const colorString = stringToColor(joke.content)
  let startColor = color(colorString)
  const endColor = startColor.clone().alpha(0.5)
  startColor = startColor.alpha(0)

  return {
    bg: {
      backgroundColor: colorString
    },
    gradient: {
      background:
        `linear-gradient(
          to bottom,
          rgba(
            ${startColor.red()},
            ${startColor.green()},
            ${startColor.blue()},
            ${startColor.alpha()}
          ), rgba(
            ${endColor.red()},
            ${endColor.green()},
            ${endColor.blue()},
            ${endColor.alpha()}
          )
        )`
    }
  }
}

export default ({joke, onVoteDown, onVoteUp}) => {
  const colors = jokeColor(joke)
  const divider = joke.positiv + joke.negativ || 1
  const style = {
    width: ((joke.positiv / divider * 50) + 50) + '%'
  }
  return (
    <div className={cx(
        'card--joke',
        {isVoted: joke.voted}
      )}>
      <div className="card--joke__face--front" style={colors.bg}>
        <p>{joke.content}</p>
        <div
          className="shadow"
          style={colors.gradient} >
        </div>
      </div>
      <div className="card--joke__face--back" style={colors.bg}>
        <div className="card--joke__vote--down" onClick={joke.voted ? false : onVoteDown}></div>
        <div className="card--joke__vote--up" style={style} onClick={joke.voted ? false : onVoteUp}></div>
      </div>
    </div>
  )
}
