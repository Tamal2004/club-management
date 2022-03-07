import { all } from 'redux-saga/effects';
import { membersSaga } from './members';

const rootSaga = function* () {
    yield all([membersSaga()]);
};

export { rootSaga };
