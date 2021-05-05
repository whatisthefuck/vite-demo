import React, { useState } from 'react'
import { Route, Link, Switch, HashRouter as Router } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

function App() {

  function Home() {
    return <h2>Home</h2>;
  }

  function About() {
    return <h2>About</h2>;
  }

  function Users() {
    return <h2>Users</h2>;
  }

  return (
    <Router>
      <Link to="/">homeh1aha</Link>
      <Link to="/about">about</Link>
      <Link to="/users">user</Link>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>
  )
}

export default App
