import React, {Suspense} from 'react';

import './App.css';
import { withTranslation } from 'react-i18next';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Page404 from './pages/Page404';
import Page500 from './pages/Page500';
import Main from './containers/Main';

function App(props: any) {
  const { t } = props;


    return (
      <RecoilRoot>
        <HashRouter>
          <Switch>
            <Route strict path="/main" render={props => <Main {...props}/>} />
            <Route exact path="/login" render={props => <Login {...props}/>} />
            <Route exact path="/forgot-password" render={props => <ForgotPassword {...props}/>} />
            <Route exact path="/404" render={props => <Page404 {...props}/>} />
            <Route exact path="/500" render={props => <Page500 {...props}/>} />
            <Route exact path="/">
              <Redirect to="/main" />
            </Route>
            <Route path="/*">
              <Redirect to="/404" />
            </Route>
          </Switch>
        </HashRouter>
      </RecoilRoot>
    );
    

    
  

}




export default withTranslation('common')(App);