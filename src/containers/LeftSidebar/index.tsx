import React from "react";

import { useRecoilState } from 'recoil';
import { sidebarStatus } from '../../tools/recoil/sidebarStatus';

import './index.css';


interface Props {
  children?: React.ReactNode;
}

const LeftSidebar: React.FC<Props> = ({children}) => { 

  const [isOpenSidebar, setOpenSidebar] = useRecoilState(sidebarStatus);

  return (
    <div id="leftSidebar" className="leftSidebar" style={{width: isOpenSidebar? '250px': '0px'}}>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
      <a href="#">Contact</a>
      <a href="#">Contact</a>
      <a href="#">Contact</a>
      <a href="#">Contact</a>
      <a href="#">Contact</a>
      <a href="#">Contact</a>
    </div>
  );
}
export default LeftSidebar;