import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './components/layout'
import HomePage from './components/pages/HomePage'
import './App.css'

const App: React.FC = () => {
  return (

    <Router>
      <Layout>
        <Switch>

          <Route exact path="/" component={HomePage} />

          {/* <Route component={NotFound} /> */}

        </Switch>
      </Layout>
    </Router>
  )
}

export default App
