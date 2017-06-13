import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Header from './header'
import Dashboard from './dashboard'
import Calendar from './calendar'

export default class RouterComponent extends Component{

  render(){
    return(
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Calendar}/>
          <Route path="/dashboard" component={Dashboard}/>
        </div>
      </Router>
    )
  }
}
