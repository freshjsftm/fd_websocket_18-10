import { takeLatest } from 'redux-saga/effects';
import ACTIONS from '../actions';
import {createMessageSaga, getMessagesSaga} from './chatSagas';

export default function * rootSaga(){
  yield takeLatest(ACTIONS.CREATE_MESSAGE_REQUEST, createMessageSaga)
  yield takeLatest(ACTIONS.GET_MESSAGES_REQUEST, getMessagesSaga)
}