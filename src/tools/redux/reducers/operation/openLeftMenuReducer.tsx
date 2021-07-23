import produce from "immer"
import initState from '../../states/operation';
import { openLeftMenuActionType, OPEN_LEFT_MENU } from '../../actionTypes/operation/openLeftMenu';

const reducer = (state = initState, action: openLeftMenuActionType) => {
    console.log(action);
    let newState = state;
    switch (action.type) {
        case OPEN_LEFT_MENU:
            return produce(state, draft => {
                draft["openLeftMenu"] = action.payload.openLeftMenu
            })
        default:
            return state
    }
}

export default reducer