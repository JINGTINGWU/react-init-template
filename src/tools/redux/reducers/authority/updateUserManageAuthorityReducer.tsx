import initState from '../../states/authority';

import { updateUserManageAuthorityActionType, UPDATE_USER_MANAGE_AUTHORITY } from '../../actionTypes/authority/updateUserManageAuthority';

const reducer = (state = initState, action: updateUserManageAuthorityActionType) => {
    console.log(action);
    let newState = state;
    switch (action.type) {
        case UPDATE_USER_MANAGE_AUTHORITY:
            newState['userManage'] = action.payload.userManage;
            return {...newState}
        default:
            return state
    }
}

export default reducer