import React, { useReducer } from "react";
import './index.css';

import { useRecoilState } from 'recoil';
import { sidebarStatus } from '../../tools/recoil/sidebarStatus';

interface Props {
    onClick?: () => void;
}

const MenuIconButton: React.FC<Props> = ({
    onClick
}) => {
    const [isOpenSidebar, setOpenSidebar] = useRecoilState(sidebarStatus);

    return (
        <div className={`menuIconButton cursor-pointer inline-block ${isOpenSidebar? 'change': ''}`} onClick={() => {
            setOpenSidebar(!isOpenSidebar);
        }}>
            <div className="bar1 bg-green-600"></div>
            <div className="bar2 bg-green-600"></div>
            <div className="bar3 bg-green-600"></div>
        </div>
    );
}

export default MenuIconButton;