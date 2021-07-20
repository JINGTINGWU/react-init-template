export const UPDATE_USER_MANAGE_AUTHORITY = 'AUTHORITY_UPDATE_USER_MANAGE';

interface UpdateUserManageAuthorityI {
    type: String,
    payload: {
        userManage: {
            add: false,
            modify: false,
            remove: false
        }
    }
}

export const updateUserManageAuthority = (): UpdateUserManageAuthorityI => ({
    type: UPDATE_USER_MANAGE_AUTHORITY,
    payload: {
        userManage: {
            add: false,
            modify: false,
            remove: false
        }
    }
});

export type updateUserManageAuthorityActionType = UpdateUserManageAuthorityI;