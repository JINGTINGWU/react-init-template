export const OPEN_LEFT_MENU = 'OPEN_LEFT_MENU';

interface OpenLeftMenuI {
    type: String,
    payload: {
        openLeftMenu: boolean
    }
}

export const openLeftMenu = (openLeftMenu: boolean): OpenLeftMenuI => ({
    type: OPEN_LEFT_MENU,
    payload: {
        openLeftMenu
    }
});

export type openLeftMenuActionType = OpenLeftMenuI;