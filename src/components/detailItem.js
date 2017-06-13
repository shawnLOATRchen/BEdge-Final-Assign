import React, {Component} from 'react'

const icons = ['birthday-cake', 'cloud', 'suitcase', 'window-restore']
const border = ['birth', 'holi', 'company', 'other']
export default class DetailItem extends Component{

  constructor(){
    super();
    this.state = {};
  }
  getTypeClass(){
    switch (this.props.detail.type) {
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
    const detail = this.props.detail;
    return(
      <div className={"detail-item " + border[this.getTypeClass()] + "-border"} onClick={() => this.props.clickToEdit(this.props.index)}>
        <div>
          <i className={"fa fa-" + icons[this.getTypeClass()]} aria-hidden="true"></i>
          { " " + detail.name}
        </div>
        <div>{detail.hour + ":" + detail.minute + detail.ampm}</div>
      </div>
    )
  }
}
