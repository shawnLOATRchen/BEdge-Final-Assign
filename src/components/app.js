import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
// import { BrowserRouter as Router, Route} from 'react-router-dom';

// components
import Header from './components/header'
import Dashboard from './components/dashboard'
import Calendar from './components/calendar'

// stylesheet
import '../dist/sass/index.sass'


class App extends Component{

  constructor(){
    super();
    this.state = { page: "calendar", dashboard:[]};
  }

  render(){
    return(
      <main>
        <Header changePage={(page) => this.setState({page:page})}/>
        {
          this.state.page === 'dashboard' ?
          <Dashboard
            changePage={(page) => this.setState({page:page})}
            dashboard={this.state.dashboard}
            remove={this.remove.bind(this)}
          />
          :
          <Calendar
            changePage={(page) => this.setState({page:page})}
            addToDash={this.addToDash.bind(this)}
          />
        }
      </main>
    )
  }
  addToDash(list){
    var dashboard = this.state.dashboard;
    dashboard.push(list);
    this.setState(dashboard);
  }
  remove(index){
    var dashboard = this.state.dashboard;
    dashboard.splice(index, 1);
    this.setState(dashboard);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
