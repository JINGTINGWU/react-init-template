import React from "react";
import './index.css';
interface Props {
  children?: React.ReactNode;
}

const LeftSidebar: React.FC<Props> = ({children}) => { 
  return (
    <div id="mySidebar" className="leftSidebar">
      <a href="javascript:void(0)" className="closebtn" onClick={() => {}}>×</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  );
}
export default LeftSidebar;