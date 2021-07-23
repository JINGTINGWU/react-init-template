import React, { useReducer } from "react";
import { MenuIcon, ChevronDoubleLeftIcon } from '@heroicons/react/solid';



interface Props {
  open: boolean;
  onClick: () => void;
}

const MenuIconButton: React.FC<Props> = ({ open, onClick }) => { 
  return (
    <>
    <MenuIcon 
      onClick={onClick}
      className={`h-10 w-10 mt-1 ml-3 text-white hover:text-blue-300 cursor-pointer ${open ? 'hidden': ''}`} />
    <ChevronDoubleLeftIcon 
      onClick={onClick}
      className={`h-10 w-10 mt-1 ml-3 text-white hover:text-blue-300 cursor-pointer ${open ? '': 'hidden'}`} />
    </>
  );
}

export default MenuIconButton;
