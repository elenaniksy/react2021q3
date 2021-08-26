import { configureStore } from '@reduxjs/toolkit';
import { compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer: rootReducer,
  enhancers: composeEnhancers,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
