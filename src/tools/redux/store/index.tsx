import { createStore } from 'redux';
import rootReducer from '../reducers';

export type storeTypes = ReturnType<typeof rootReducer>;

export default createStore(rootReducer);