import React, { Fragment  } from "react";

import { openLeftMenu } from '../../tools/redux/actionTypes/operation/openLeftMenu';

import { useSelector, useDispatch  } from 'react-redux'
import MenuIconButton from '../../components/MenuIconButton';


const Header = () => {
  const dispatch = useDispatch();

  const isOpenLeftMenu = useSelector((state: any) => state.operation.openLeftMenu);

  return (
    <header className="container">
      <div className="row justify-content-between">
        <div className="col-1">
        <MenuIconButton color={'green'}/>
        </div>
        <div className="col-1">
          One
        </div>
      </div>
    </header>
  );
};
export default Header;