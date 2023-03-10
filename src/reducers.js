import { combineReducers } from 'redux';
import courseReducers from './reducers/courseReducers';

const rootReducer = combineReducers({
  courses: courseReducers,
});

export default rootReducer;
