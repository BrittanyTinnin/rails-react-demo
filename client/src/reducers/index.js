import todosReducer from './todosReducer';
import { combineReducers } from 'redux';

export default combineReducers({todos: todosReducer});