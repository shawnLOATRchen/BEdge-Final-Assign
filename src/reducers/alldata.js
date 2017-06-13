import days from '../data/days.json'
import { ADD_EVENT } from '../action/addEvent'

var INITIAL_STATE = localStorage.days ? JSON.parse(localStorage.days) : days;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EVENT:
      var days = state.slice();
      days[action.payload.index] = action.payload.list;
      localStorage.setItem('days', JSON.stringify(days));
      return days;
    default:
      return state;
  }
};
