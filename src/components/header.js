import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export default class Header extends Component{

  render(){
    return(
      <header className="d-flex justify-content-between">
        <div>
          <i className="fa fa-calendar" aria-hidden="true"></i>
          <span> Schedule</span>
        </div>
        <nav>
          <Link to="/">Calendar</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>
    )
  }
}
