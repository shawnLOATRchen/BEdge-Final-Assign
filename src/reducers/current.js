import days from '../data/days.json'

import { FILTER } from '../action/filter'


var INITIAL_STATE = null;
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER:
      return action.payload;
    default:
      return state;
  }
};
