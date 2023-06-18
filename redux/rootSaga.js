import {all} from 'redux-saga/effects';
import public_saga from '../screens/public_screens/redux/saga';

// sagas

export default function* mainSaga() {
  yield all([public_saga]);
}
