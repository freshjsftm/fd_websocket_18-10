import { legacy_createStore, applyMiddleware } from 'redux';
import createSagaMW from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMW = createSagaMW()

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMW))
)

sagaMW.run(rootSaga)

export default store;