import produce from "immer"
import initState from '../../states/authority';

import { updateUserManageAuthorityActionType, UPDATE_USER_MANAGE_AUTHORITY } from '../../actionTypes/authority/updateUserManageAuthority';

const reducer = (state = initState, action: updateUserManageAuthorityActionType) => {
    console.log(action);
    let newState = state;
    switch (action.type) {
        case UPDATE_USER_MANAGE_AUTHORITY:
            return produce(state, draft => {
                draft["userManage"] = action.payload.userManage
            })
        default:
            return state
    }
}

export default reducer