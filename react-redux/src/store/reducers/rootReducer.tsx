import { combineReducers } from 'redux';
import articlesReducer from './acrticlesReducer';

export default combineReducers({
  appState: articlesReducer,
});
