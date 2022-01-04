import {combineReducers} from 'redux';

import weeklyEvents from './weeklyEvents';

export default combineReducers({
  weeklyEvents: weeklyEvents,
})