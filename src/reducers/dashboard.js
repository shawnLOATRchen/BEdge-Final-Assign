import { ADD_TO_DASHBOARD } from '../action/addToDash'
import { REMOVE_FROM_DASHBOARD } from '../action/removeFromDash'


var INITIAL_STATE = localStorage.dashboard ? JSON.parse(localStorage.dashboard) : [];
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_DASHBOARD:
      var dashboard = state.slice();
      dashboard.push(action.payload);
      window.localStorage.setItem('dashboard', JSON.stringify(dashboard));
      return dashboard;
    case REMOVE_FROM_DASHBOARD:
      var dashboard = state.slice();
      dashboard.splice(action.payload, 1);
      window.localStorage.setItem('dashboard', JSON.stringify(dashboard));
      return dashboard;
    default:
      return state;
  }
};
