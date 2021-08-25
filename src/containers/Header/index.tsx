import React, { Fragment } from "react";
import { withTranslation } from 'react-i18next';


import MenuIconButton from '../../components/MenuIconButton';
import RightMenu from '../../components/RightMenu';

import './index.css';

interface Props {
  t?: any;
  i18n?: any
}

const Header: React.FC<Props> = ({t, i18n}) => { 
  return (
    <header className={`h-14 bg-blue-300 pl-3 pr-3 pt-2 pb-2 z-50 overflow-visible`}>
      <MenuIconButton/>
      <div className={`float-right`}>
        <RightMenu />
      </div>
    </header>
  );
};

export default withTranslation('common')(Header);