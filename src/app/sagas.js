import { fork } from 'redux-saga/effects';
import homeSagas from './modules/home/sagas';

export default function* rootSaga() {
  yield [
    ...homeSagas.map((saga) => fork(saga)),
  ];
}
