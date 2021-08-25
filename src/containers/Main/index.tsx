import React, { Suspense } from 'react';
import { withTranslation } from 'react-i18next';
import { Redirect, Route, Switch, useRouteMatch, HashRouter } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import LeftSidebar from '../LeftSidebar';
import { useRecoilState } from 'recoil';
import { sidebarStatus } from '../../tools/recoil/sidebarStatus';
import routes from "../../tools/routes";
import './index.css';
const SetBct1Parameter = React.lazy(() => import('../../pages/SetBct1Parameter'));

function Main(props: any) {
  const { t } = props;
  let { path, url } = useRouteMatch();
  const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
console.log();
  return (
    <div id="main">
      <Header />
      <div id="sidebar-with-content">
        <div className="z-10">
          <LeftSidebar children={routes} />
        </div>
        <div id="main-content" className="z-0">
          <Suspense fallback={loading()}>

            <Switch>
              {routes.map((route, index) => { 
                if (route.path) {
                  return (
                    // Render more <Route>s with the same paths as
                    // above, but different components this time.
                    <Route
                      key={index}
                      path={`${path}${route.path}`}
                      children={<route.main />}
                    />
                  )
                }
              })}
            </Switch>
          </Suspense>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default withTranslation('common')(Main);
