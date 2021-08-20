import React, { Suspense } from 'react';
import { withTranslation } from 'react-i18next';
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import LeftSidebar from '../LeftSidebar';
import { useRecoilState } from 'recoil';
import { sidebarStatus } from '../../tools/recoil/sidebarStatus';
import routes from "../../tools/routes";
import './index.css';

import { Dropdown } from 'react-bootstrap';

function Main(props: any) {
  const { t } = props;

  const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  return (
    <div id="main">
      <Header />
      <div id="sidebar-with-content">
        <Router>
          <LeftSidebar children={routes}/>
          <div id="main-content" >
            <Suspense fallback={loading()}>
              <Switch>
                {routes.map((route, index) => (
                  // Render more <Route>s with the same paths as
                  // above, but different components this time.
                  <Route
                    key={index}
                    path={route.path}
                    children={<route.main />}
                  />
                ))}
                <Redirect from="/" to="/my-info" />
              </Switch>
            </Suspense>
          </div>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default withTranslation('common')(Main);
