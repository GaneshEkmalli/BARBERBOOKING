import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootReducer from './reducer/RootReducer';
import RootSaga from './saga/RootSaga';

const sagaMiddleware = createSagaMiddleware()
const persistConfig = {
    key: 'primary',
    storage: AsyncStorage
}
const initialState = {}
const middlewares = [sagaMiddleware]
let devtools = (x: any) => x

if (
    process.env.NODE_ENV !== 'production' &&
    process.browser &&
    window.__REDUX_DEVTOOLS_EXTENSION__
) {
    devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
}
const persistedReducer = persistReducer(persistConfig, RootReducer)
export const Store = createStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(...middlewares), devtools)
)
export const persistor = persistStore(Store);
sagaMiddleware.run(RootSaga);
