import { fork, all } from 'redux-saga/effects';
import homeSagas from './modules/home/sagas';

export default function* rootSaga() {
  yield all([...homeSagas.map((saga) => fork(saga))]);
}
