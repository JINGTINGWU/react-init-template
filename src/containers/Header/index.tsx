import React, { useReducer } from "react";
import { FaList } from 'react-icons/fa';
import Button from '../../components/Button';
import MenuIconButton from '../../components/MenuIconButton';
import { MenuIcon, UserIcon } from '@heroicons/react/solid'

import { openLeftMenu } from '../../tools/redux/actionTypes/operation/openLeftMenu';
import reducer from '../../tools/redux/reducers/operation/openLeftMenuReducer';
import operationState from '../../tools/redux/states/operation';

import { useSelector, useDispatch  } from 'react-redux'

const Footer = () => {
  const dispatch = useDispatch();

  const isOpenLeftMenu = useSelector((state: any) => state.operation.openLeftMenu);

  return (
    <header className="h-16 bg-indigo-900 flex flex-row justify-between ">

      <MenuIconButton open={isOpenLeftMenu} onClick={()=>{dispatch(openLeftMenu(!isOpenLeftMenu))}}/>

      <div className="w-10 bg-red-100">
      </div>

      <UserIcon className="h-10 w-10 mt-1 mr-3 text-white hover:text-blue-300 cursor-pointer" onClick={() => console.log('測試')} />

    </header>
  );
};
export default Footer;