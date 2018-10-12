import React from 'react'
import { Route, Link } from 'react-router-dom'

import Home from '../home'
import About from '../about'
import Scroll from '../Scroll'

const App = () => (
  <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/scroll" component={Scroll} />
      <Route exact path="/about-us" component={About} />
  </div>
)

export default App
