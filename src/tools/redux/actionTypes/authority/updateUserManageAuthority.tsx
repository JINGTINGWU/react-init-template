export const UPDATE_USER_MANAGE_AUTHORITY = 'AUTHORITY_UPDATE_USER_MANAGE';

interface UpdateUserManageAuthorityI {
    type: String,
    payload: {
        userManage: {
            add: boolean,
            modify: boolean,
            remove: boolean
        }
    }
}

export const updateUserManageAuthority = (add: boolean, modify: boolean, remove: boolean): UpdateUserManageAuthorityI => ({
    type: UPDATE_USER_MANAGE_AUTHORITY,
    payload: {
        userManage: {
            add,
            modify,
            remove
        }
    }
});

export type updateUserManageAuthorityActionType = UpdateUserManageAuthorityI;