import React from 'react'
import MainJoke from './../containers/main-joke-container'
import JokeList from './../containers/joke-list-container'
import Button from './../components/button'
import Sidebar from './../containers/sidebar-container'

const Home = () =>
  <div>
    <MainJoke />
    <JokeList />
    <Sidebar />
    <Button to='/post'>Publish my joke</Button>
  </div>

export default Home
