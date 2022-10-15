
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'


function App() {
  return (
    <>
    <Router>
      <Navbar /> 
      <div className="container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About/>
        </Route> 
      </Switch>
      </div>
    </Router>
  </>
  )
}

export default App
