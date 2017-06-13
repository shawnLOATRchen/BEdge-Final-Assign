import React, {Component} from 'react'
import { connect } from 'react-redux'

import EditBox from './edit-box'
import DetailItem from './detailItem'

import { addEvent } from '../action/addEvent'

class DayBox extends Component{

  constructor(){
    super();
    this.state = { add: false, edit: false, index: -1};
  }

  render(){

    const day = this.props.day;
    return(
      <div className="day-box">
        <div className={"day-title" + (day.today ? " active":"")} onClick={() => this.setState({add:!this.state.add})}>
          <span>{day.num ? day.num : null}</span>
        </div>
        {this.props.day.events.map((detail, index) => {
          return (
            <DetailItem
              key={index}
              index={index}
              detail={detail}
              clickToEdit={(index) => this.setState({edit: true, index: index})}
            />
          )
        })}
        {this.state.add &&
          <div className="add-new-btn" onClick={() => this.setState({edit: true, index:day.events.length})}>
            <i className="fa fa-plus" aria-hidden="true" ></i>
          </div>}
        {this.state.edit &&
          <EditBox
            item={this.state.index >= 0 ? day.events[this.state.index] : null}
            index={this.state.index}
            date={day.num}
            close={() => this.setState({edit:false})}
            edit={this.handleEdit.bind(this)}
          />}
      </div>
    )
  }
  handleEdit(index, detail){
    var day = this.props.day;
    day.events[index] = detail;
    this.props.addEvent(this.props.index, day);
  }
}


export default connect(null, {addEvent})(DayBox);
