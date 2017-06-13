import React, {Component} from 'react'


export default class EditBox extends Component{

  constructor(){
    super();
    this.state = { add: false, edit: false};
  }

  render(){
    const item = this.props.item;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const minutes = ['00', '10', '20', '30', '40', '50'];
    const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    const hours = [1,2,3,4,5,6,7,8,9,10,11,12]
    return(
      <div className="edit-box">
        <div className="edit-title">Edit</div>
        <div className="edit-subtitle">Edit your event information here</div>
        <div className="form-group">
          <label>Event type</label>
          <select className="form-control" ref="type" defaultValue={item ? item.type : null}>
            <option>Birthdays</option>
            <option>Holidays</option>
            <option>Company Events</option>
            <option>Miscellaneous</option>
          </select>
        </div>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" ref="name" defaultValue={item ? item.name : null}/>
        </div>
        <div className="form-group date-box">
          <label>Month</label>
          <select className="form-control" ref="month" defaultValue={item ? item.month : 'May'}>
            {months.map((month, index) => {
              return(<option key={index}>{month}</option>)
            })}
          </select>
          <label>Date</label>
          <select className="form-control" ref="date" defaultValue={item ? item.date : this.props.date}>
            {dates.map((date, index) => {
              return(<option key={index}>{date}</option>)
            })}
          </select>
        </div>
        <div className="form-group time-box">
          <label>Hour</label>
          <select className="form-control" ref="hour" defaultValue={item ? item.hour : null}>
          {hours.map((hour, index) => {
            return(<option key={index}>{hour}</option>)
          })}
          </select>
          <label>Minute</label>
          <select className="form-control" ref="minute" defaultValue={item ? item.minute : null}>
          {minutes.map((minute, index) => {
            return(<option key={index}>{minute}</option>)
          })}
          </select>

          <select className="form-control" ref="ampm" defaultValue={item ? item.ampm : null}>
            <option>AM</option>
            <option>PM</option>
          </select>
        </div>
        <div className="btn-group d-flex justify-content-between">
          <div className="btn btn-secondary" onClick={() => this.props.close()}>Cancel</div>
          <div className="btn btn-primary" onClick={() => this.handleSave()}>Save</div>
        </div>
      </div>
    )
  }
  handleSave(){
    const refs = this.refs;
    this.props.edit(this.props.index, {
      type: refs.type.value,
      name: refs.name.value,
      month: refs.month.value,
      date: refs.date.value,
      hour: refs.hour.value,
      minute: refs.minute.value,
      ampm: refs.ampm.value
    });
    this.props.close();
  }
}
