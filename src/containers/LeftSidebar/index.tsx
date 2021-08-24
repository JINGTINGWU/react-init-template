import React from "react";

import { withTranslation } from 'react-i18next';

import { useRecoilState } from 'recoil';
import { sidebarStatus } from '../../tools/recoil/sidebarStatus';

import './index.css';
import routes from "../../tools/routes";

import { Redirect, Route, Switch, Link } from 'react-router-dom';

import { Disclosure } from '@headlessui/react'

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
            if(route.path) {
              return (
                <li key={`left-bar-li-${index}`}>
                  <Link to={route.path}>
                    <div className={`flex group ${isOpenSidebar? 'open': 'close'}`}>
                      <div className={`item-icon mr-4 w-8`}>
                        {route.icon ? <route.icon />: <span />}
                      </div>
                      <span className={`item-title whitespace-nowrap rounded-md px-1`}>
                        {t(route.name)}
                      </span>
                    </div>
                  </Link>
                </li>
              )
            } else {
              if(route.children) {
                return (<Disclosure defaultOpen={true} key={`left-bar-Disclosure-${index}`}>
                  {({ open }) => (
                    <>
                      <li key={`left-bar-li-${index}`}>
                        <Disclosure.Button>
                          <a href="#">
                            <div className={`flex group  ${isOpenSidebar? 'open': 'close'}`}>
                              <div className={`item-icon mr-4 w-8`}>
                                {route.icon ? <route.icon />: <span />}
                                
                              </div>
                              <span className={`item-title whitespace-nowrap rounded-md px-1`}>
                                {t(route.name)}
                              </span>
                              <div className={`flex items-center`}><i className={`bi ${open? 'bi-x': 'bi-plus'} ${isOpenSidebar? '': '-ml-4'} text-xs ml-1`}></i></div>
                            </div>
                          </a>
                      </Disclosure.Button>
                      </li>
                      <Disclosure.Panel>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                          {routes.map((route: any, index: number) => {
                            if(route.isLeftMenu) {
                              if(route.path) {
                                return (
                                  <li key={`left-bar-li-${index}`}>
                                    <Link to={route.path}>
                                      <div className={`flex group pl-4 ${isOpenSidebar? 'open': 'close'}`}>
                                        <div className={`item-icon mr-4 w-8`}>
                                          {route.icon ? <route.icon />: <span />}
                                        </div>
                                        <span className={`item-title whitespace-nowrap rounded-md px-1`}>
                                          {t(route.name)}
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                )
                              }
                            }
                          })}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>);
              }


            }

          }
        })}
      </ul>
    </div>
  );
}

export default withTranslation('common')(LeftSidebar);