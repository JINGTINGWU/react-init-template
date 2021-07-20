import initState from '../states/authority';

export const SHOW_ALL = 'AUTHORITY_SHOW_ALL';
export const UPDATE_USER_MANAGE = 'AUTHORITY_UPDATE_USER_MANAGE';

const authorityReducer = (state = initState, action: any) => {
    console.log(action);
    let newState = state;
    switch (action.type) {
        case SHOW_ALL:
            return {...newState}
        case UPDATE_USER_MANAGE:
            newState['userManage'] = action.payload.value;
            return {...newState}
        default:
            return state
    }
}

export default authorityReducer