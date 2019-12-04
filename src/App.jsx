import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DadJokes from './pages/DadJokes'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Dad Jokes</h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/:dadJokes" component={DadJokes}></Route>
      </Switch>
    </Router>
  )
}

export default App
