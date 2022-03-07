import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reducer } from './reducers';
import { rootSaga } from './sagas';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    return {
        ...createStore(reducer, {}, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run
    };
};

const store = configureStore();
store.runSaga(rootSaga);

export { store };
