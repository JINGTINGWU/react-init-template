import React, { useReducer } from "react";
import './index.css';

import { useRecoilState } from 'recoil';
import { sidebarStatus } from '../../tools/recoil/sidebarStatus';

interface Props {
    color?: string;
    onClick?: () => void;
}

const MenuIconButton: React.FC<Props> = ({
    color,
    onClick
}) => {
    const [isOpenSidebar, setOpenSidebar] = useRecoilState(sidebarStatus);

    let barColor = color ? color: '#333';
    return (
        <div className={`menuIconButton ${isOpenSidebar? 'change': ''}`} onClick={() => {
            setOpenSidebar(!isOpenSidebar);
        }}>
            <div className="bar1" style={{backgroundColor: barColor}}></div>
            <div className="bar2" style={{backgroundColor: barColor}}></div>
            <div className="bar3" style={{backgroundColor: barColor}}></div>
        </div>
    );
}

export default MenuIconButton;