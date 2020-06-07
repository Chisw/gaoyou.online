import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { FocusStyleManager } from '@blueprintjs/core'
import Layout from './components/layout'
import './css/index.css'

import HomePage from './components/pages/HomePage'
import PostPage from './components/pages/PostPage'
import UserPage from './components/pages/UserPage'
import UploadPage from './components/pages/UploadPage'
import AboutPage from './components/pages/AboutPage'
import NotFound from './components/pages/NotFound'

FocusStyleManager.onlyShowFocusOnTabs()

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>

          <Route exact path="/" component={HomePage} />
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/upload" component={UploadPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/post/:id" component={PostPage} />

          <Route component={NotFound} />

        </Switch>
      </Layout>
    </Router>
  )
}

/*

 HOME: scan, filter(age: 1900, ..., 2000, unknown)
 USER: avatar, name, sex, age, description, isTrue, postList
 UPLOAD: cut, resize
 
 */

export default App
