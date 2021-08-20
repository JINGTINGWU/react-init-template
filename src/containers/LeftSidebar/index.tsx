import React from "react";

import { withTranslation } from 'react-i18next';

import { useRecoilState } from 'recoil';
import { sidebarStatus } from '../../tools/recoil/sidebarStatus';

import './index.css';
import routes from "../../tools/routes";

import { Redirect, Route, Switch, Link } from 'react-router-dom';

interface Props {
  t?: any;
}

const LeftSidebar: React.FC<Props> = ({t}) => { 

  const [isOpenSidebar, setOpenSidebar] = useRecoilState(sidebarStatus);

  return (
    <div id="leftSidebar" className={`leftSidebar ${isOpenSidebar? 'open': 'close'}`}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {routes.map((route, index) => (
          <li key={`left-bar-li-${index}`}>
            <Link to={route.path}>{t(route.name)}</Link>
          </li>
        ))}
        <Link to={'/set-bct2-parameter'}>測試</Link>
        <a>aaaa</a>
      </ul>
    </div>
  );
}

export default withTranslation('common')(LeftSidebar);