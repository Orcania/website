import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

import exampleReducer from './reducers/exampleReducer';
import modalReducer from './reducers/modalReducer';
import mintReducer from './reducers/mintReducer';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    exampleReducer,
    modalReducer,
    mintReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
