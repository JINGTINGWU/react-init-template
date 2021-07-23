import React from "react";
import { Transition } from '@headlessui/react'

interface Props {
  show: boolean;
  children?: React.ReactNode;
}

const LeftSidebar: React.FC<Props> = ({show, children}) => { 
  console.log('show:' + show);
  return (
    
    <Transition
          show={show}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          
        >
      <div style={{backgroundColor: 'pink', width: '33%'}}>
       {children}
      </div>
    </Transition>
  );
}
export default LeftSidebar;