import { put } from 'redux-saga/effects';
import * as ChatActionsCreator from '../actions/chatActionsCreator';
import * as API from '../api';

export function * createMessageSaga(action){
  try {
    const {data:{data}} = yield API.createMessage(action.payload.message);
    yield put(ChatActionsCreator.createMessageSuccess(data))
  } catch (error) {
    yield put(ChatActionsCreator.createMessageError(error))
  }
}

export function * getMessagesSaga(action){
  try {
    const {data:{data}} = yield API.getAllMessages();
    yield put(ChatActionsCreator.getMessagesSuccess(data))
  } catch (error) {
    yield put(ChatActionsCreator.getMessagesError(error))
  }
}