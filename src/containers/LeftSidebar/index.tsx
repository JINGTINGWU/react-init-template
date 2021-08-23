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
    <div id="leftSidebar" className={`leftSidebar bg-gray-900 pt-4 overflow-visible ${isOpenSidebar? 'open': 'close'}`}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {routes.map((route, index) => {
          if(route.isLeftMenu) {
            return (
              <li key={`left-bar-li-${index}`}>
                <Link to={route.path}>
                  <div className="flex">
                    <div className={`item-icon mr-4 w-8 ${isOpenSidebar? 'open': 'close'}`}>
                      {route.icon ? <route.icon />: <span />}
                    </div>
                    <span className={`item-title inline-block ${isOpenSidebar? 'open': 'close'}`}>
                      {t(route.name)}
                    </span>
                  </div>
                </Link>
              </li>
            )
          }
        })}
      </ul>
    </div>
  );
}

export default withTranslation('common')(LeftSidebar);