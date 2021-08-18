import React, { useReducer } from "react";
import './index.css';

import { openLeftMenu } from '../../tools/redux/actionTypes/operation/openLeftMenu'; 
import openLeftMenuReducer from '../../tools/redux/reducers/operation/openLeftMenuReducer'; 
import operationState from '../../tools/redux/states/operation';


interface Props {
    color?: string;
    onClick?: () => void;
}

const MenuIconButton: React.FC<Props> = ({
    color,
    onClick
}) => {

    const [updateUserManageAuthorityState, dispatchUpdateUserManageAuthority] = useReducer(openLeftMenuReducer, operationState);
    let barColor = color ? color: '#333';
    return (
        <div className={`menuIconButton ${updateUserManageAuthorityState.openLeftMenu? 'change': ''}`} onClick={() => {
            dispatchUpdateUserManageAuthority(openLeftMenu(
                !updateUserManageAuthorityState.openLeftMenu
              ))
        }}>
            <div className="bar1" style={{backgroundColor: barColor}}></div>
            <div className="bar2" style={{backgroundColor: barColor}}></div>
            <div className="bar3" style={{backgroundColor: barColor}}></div>
        </div>
    );
}

export default MenuIconButton;