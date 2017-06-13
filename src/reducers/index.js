import { combineReducers } from 'redux';

// reducers
import AllReducer from './alldata';
import CurReducer from './current';
import DashboardReducer from './dashboard';

const rootReducer = combineReducers({
  days: AllReducer,
  current: CurReducer,
  dashboard: DashboardReducer
});

export default rootReducer;
