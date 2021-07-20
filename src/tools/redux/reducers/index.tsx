import { combineReducers } from 'redux'
import authorityReducer from './authorityReducer'
import userReducer from './userReducer'
export default combineReducers({
    authority: authorityReducer,
    user: userReducer
})