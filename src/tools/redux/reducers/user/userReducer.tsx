import initState from '../../states/user';

export const SHOW = 'USER_SHOW';
export const UPDATE_LOGIN_DATETIME = 'USER_UPDATE_LOGIN_DATETIME';

const userReducer = (state = initState, action: any) => {
    // console.log(action);
    let newState = state;
    switch (action.type) {
        case UPDATE_LOGIN_DATETIME:
            newState['loginDateTime'] = action.payload.value;
            return {...newState}
        case SHOW:
            return {...newState}
        default:
            return state
    }
}

export default userReducer