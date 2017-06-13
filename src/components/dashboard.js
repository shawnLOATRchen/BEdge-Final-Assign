import React, {Component} from 'react'
import { connect } from 'react-redux'

import { filter } from '../action/filter'
import { removeFromDash } from '../action/removeFromDash'

const icons = ['birthday-cake', 'cloud', 'suitcase', 'window-restore']
const border = ['birth', 'holi', 'company', 'other']

class Dashboard extends Component{
  constructor(){
    super();
  }
  
  getTypeClass(type){
    switch (type) {
      case "Birthdays":
        return 0
      case "Holidays":
        return 1
      case "Company Events":
        return 2
      case "Miscellaneous":
      default:
        return 3
    }
  }

  render(){
    return(
      <section className="page-dashboard">
        <div className="card-container d-flex flex-wrap justify-content-center">
          {this.props.dashboard.map((card, index) => {
            return(
              <div key={index} className="dashboard-card-container">
                <button type="button" className="close" aria-label="Close" onClick={() => this.props.removeFromDash(index)}>
                  <span aria-hidden="true">&times;</span>
                </button>
                <div className="card-name">{card.name}</div>
                {card.items.map((detail, i) => {
                  const typeIndex = this.getTypeClass(detail.type);
                  return(
                    <div key={i} className={"card-item d-flex justify-content-between " + border[typeIndex] + "-border"}>
                      <div className="left">
                        <i className={"fa fa-" + icons[typeIndex]} aria-hidden="true"></i>
                        { " " + detail.name}
                      </div>
                      <div className="right">
                        {detail.month + " " + detail.date + " " + detail.hour + ":" + detail.minute + detail.ampm}
                      </div>
                    </div>
                  )
                })}
                <div className="to-calendar text-center" onClick={() => this.handleViewCalendar(index)}>
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  <span> View all in calendar</span>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
  handleViewCalendar(index){
    this.props.filter(this.props.dashboard[index])
    this.props.history.push("/");
  }
}

function mapStateToProps(state) {
  return {
    dashboard: state.dashboard
  };
}

export default connect(mapStateToProps, {removeFromDash, filter})(Dashboard);
