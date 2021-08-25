import React from "react";

import { withTranslation } from 'react-i18next';

import { useRecoilState } from 'recoil';
import { sidebarStatus } from '../../tools/recoil/sidebarStatus';

import './index.css';
import routes from "../../tools/routes";

import { useRouteMatch, Link } from 'react-router-dom';

import { Disclosure } from '@headlessui/react'

interface Props {
  t?: any;
}

const LeftSidebar: React.FC<Props> = ({t}) => { 
  let { path, url } = useRouteMatch();
  const [isOpenSidebar, setOpenSidebar] = useRecoilState(sidebarStatus);

  return (
      <div id="leftSidebar" className={`leftSidebar bg-gray-900 py-4 overflow-y-auto overflow-x-hidden ${isOpenSidebar? 'open': 'close'}`}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {routes.map((route, index) => {
            if(route.isLeftMenu) {
              if(route.children) {
                return (<Disclosure defaultOpen={true} key={`left-bar-Disclosure-${index}`}>
                  {({ open }) => (
                    <>
                      <li key={`left-bar-li-${index}`}>
                        <Disclosure.Button>
                          <a>
                            <div className={`flex ${isOpenSidebar? 'open': 'close'}`}>
                              <div className={`item-icon mr-4 w-8`}>
                                {route.icon ? <route.icon />: <span />}
                              </div>
                              <span className={`item-title rounded-md px-1`}>
                                {t(route.name)}
                              </span>
                              <div className={`flex items-center`}><i className={`bi ${open? 'bi-x': 'bi-plus'} x-mark text-xs ml-1`}></i></div>
                            </div>
                          </a>
                        </Disclosure.Button>
                      </li>
                      <Disclosure.Panel>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                          {route.children.map((route: any, index: number) => {
                            if(route.isLeftMenu) {
                              if(route.path) {
                                return (
                                  <li key={`left-bar-li-${index}`}>
                                    <Link to={`${url}${route.path}`}>
                                      <div className={`flex pl-4 ${isOpenSidebar? 'open': 'close'}`}>
                                        <div className={`item-icon mr-4 w-8`}>
                                          {route.icon ? <route.icon />: <span />}
                                        </div>
                                        <span className={`item-title rounded-md px-1`}>
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
              } else {
                if(route.path) {
                  return (
                    <li key={`left-bar-li-${index}`}>
                      <Link to={`${url}${route.path}`}>
                        <div className={`flex ${isOpenSidebar? 'open': 'close'}`}>
                          <div className={`item-icon pl-1 mr-4 w-8`}>
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
            }
          })}
        </ul>
      </div>
  );
}

export default withTranslation('common')(LeftSidebar);