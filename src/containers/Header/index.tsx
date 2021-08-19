import React, { Fragment  } from "react";

import MenuIconButton from '../../components/MenuIconButton';

import './index.css';

const Header = () => {

  return (
    <header className="header">
      <MenuIconButton color={'green'}/>
      <div className="header-right">

      </div>
    </header>
  );
};
export default Header;