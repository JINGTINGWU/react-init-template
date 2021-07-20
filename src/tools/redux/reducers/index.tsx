import { combineReducers } from 'redux'
import showAllAuthorityReducer from './authority/showAllAuthorityReducer';
import updateUserManageAuthorityReducer from './authority/updateUserManageAuthorityReducer';

export default combineReducers({
    showAllAuthority: showAllAuthorityReducer,
    updateUserManageAuthority: updateUserManageAuthorityReducer
})