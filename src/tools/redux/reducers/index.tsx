import { combineReducers } from 'redux'
import showAllAuthorityReducer from './authority/showAllAuthorityReducer';
import updateUserManageAuthorityReducer from './authority/updateUserManageAuthorityReducer';
import openLeftMenuReducer from './operation/openLeftMenuReducer';

export default combineReducers({
    showAllAuthority: showAllAuthorityReducer,
    updateUserManageAuthority: updateUserManageAuthorityReducer,
    operation: openLeftMenuReducer
})