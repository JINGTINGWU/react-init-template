import initState from '../../states/authority';
import { showAllAuthorityActionType, SHOW_ALL_AUTHORITY } from '../../actionTypes/authority/showAllAuthority';

const reducer = (state = initState, action: showAllAuthorityActionType) => {
    console.log(action);
    let newState = state;
    switch (action.type) {
        case SHOW_ALL_AUTHORITY:
            return {...newState}
        default:
            return state
    }
}

export default reducer