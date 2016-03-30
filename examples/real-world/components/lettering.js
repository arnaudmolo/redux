import React from 'react';

/**
 * @class Lettering
 * Templates for the main joke
 */

let animationDuration = 2000;

const toAnimation = (children) => {
    const lettering = []
    for (let i = 0; i <= children.length - 1; i++) {
      lettering.push(<span key={Math.random()} style={{
          animationDelay: animationDuration / children.length * i + "ms"
        }
      }>{children[i]}</span>);
    }
    return lettering
}

const Lettering = ({children = ''}) => {
  return (
    <span className="lettering-container">
      {toAnimation(children)}
    </span>
  )
}

export default Lettering
