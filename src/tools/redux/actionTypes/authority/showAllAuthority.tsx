export const SHOW_ALL_AUTHORITY= 'AUTHORITY_SHOW_ALL';

interface ShowAllAuthorityI {
    type: String,
}

export const showAllAuthority = (): ShowAllAuthorityI => ({
    type: SHOW_ALL_AUTHORITY
});

export type showAllAuthorityActionType = ShowAllAuthorityI;