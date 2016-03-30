import React from 'react'
import MainJoke from './../components/main-joke'
import JokeList from './../containers/joke-list-container'
import Button from './../components/button'

const Home = () =>
  <div>
    <MainJoke />
    <JokeList />
    <Button to='/post'>Publish my joke</Button>
  </div>

export default Home
