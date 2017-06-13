import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';


import DayBox from './day-box'

import { addToDash } from '../action/addToDash'


const weeks = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
const types = ['Birthdays', 'Holidays', 'Company Events', 'Miscellaneous']
const icons = ['birthday-cake', 'cloud', 'suitcase', 'window-restore']

class Calendar extends Component{

  constructor(props){
    super(props);
    var days = this.props.days.slice();
    if (this.props.current) {
      days.forEach(day => day.events = [])
      this.props.current.items.forEach((item) => {
        days[parseInt(item.date)+2].events.push(item);
      })
    }
    this.state = { days: days, check:[false, false, false, false], canAdd: false};
  }

  render(){

    return(
      <section className="page-calendar d-flex">
        <div className="event-box col-3">
          <div className="event">
            <div className="title">SHOW</div>
            {types.map((type, index) => {
              return(
                <div key={index} className="d-flex justify-content-between type-item">
                  <div><i className={"fa fa-" + icons[index]} aria-hidden="true"></i>{" " + type}</div>
                  <i
                    className={"fa fa-" + (this.state.check[index]? "check-square" : "square-o")}
                    aria-hidden="true"
                    onClick={() => this.checkBox(index)}
                  ></i>
                </div>
              )
            })}
            <div className="btn btn-primary add-to-dash-btn" onClick={() => this.setState({toDash:true})}><i className="fa fa-plus-square-o" aria-hidden="true"></i> Add events to dashboard</div>
            {this.state.toDash &&
              <div className="before-add-to-dash">
                <h4>Give this calendar snapshot a name</h4>
                <p>The name will show up in the dashboard view for each snapshot card</p>
                <label>Name*</label>
                <input type="text" className="form-control" ref="name" placeholder="Enter snapshot name here" onChange={() => this.handleAddName()}/>
                <div className="btn-group d-flex justify-content-between">
                  <div className="btn btn-secondary" disabled onClick={() => this.setState({toDash:false})}>Cancel</div>
                  <div className={"btn btn-primary" + (this.state.canAdd? "":" disabled")}  onClick={() => this.handleAddToDash()}>Save</div>
                </div>
              </div>
            }
          </div>
        </div>
        <div className="calendar-box col-9">
          <div className="calendar">
            <div className="header">
              <span className="switch">
                <i className="fa fa-angle-left" aria-hidden="true"></i>
                <span> Today </span>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </span>
              <div className="title text-center">May 2017</div>
            </div>
            <div className="days-container">
              <div className="week d-flex justify-content-around">
                {weeks.map((week, index) => {
                  return(<span key={index}> {week} </span>)
                })}
              </div>
              <div className="days-all d-flex flex-wrap">
                {this.state.days.map((day, index) => {
                  return(
                    <DayBox
                      key={index}
                      index={index}
                      day={day}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  checkBox(index){
    var check = this.state.check;
    check[index] = !check[index];
    this.setState({check})
    var checked = [];
    for (var i = 0; i < types.length; i++) {
      if(this.state.check[i]) checked.push(types[i]);
    }
    if (checked.length == 0){
      return this.setState({days: this.props.days})
    };
    var days = [];
    this.props.days.forEach((day) => {
      var events = [];
      day.events.forEach((detail) => {
        if(checked.includes(detail.type)){
          events.push(detail);
        }
      })
      days.push({num: day.num, events:events, today:day.today});
    })
    this.setState({days})
  }
  handleAddName(){
    if(this.refs.name.value.length > 0){
      this.setState({canAdd:true})
    } else {
      this.setState({canAdd:false})
    }
  }
  handleAddToDash(){
    if (!this.state.canAdd) return;
    var checked = [];
    for (var i = 0; i < types.length; i++) {
      if(this.state.check[i]) checked.push(types[i]);
    }
    var list = [];
    this.state.days.forEach((day) => {
      day.events.forEach((detail) => {
        if(checked.includes(detail.type)){
          list.push(detail);
        }
      })
    })
    this.props.addToDash({
      name: this.refs.name.value,
      items: list
    });
    this.props.history.push("/dashboard")
  }
}

function mapStateToProps(state) {
  return {
    days: state.days,
    current: state.current
  };
}

export default connect(mapStateToProps, {addToDash})(Calendar);
