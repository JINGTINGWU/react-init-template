import React, {Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import { withTranslation } from 'react-i18next';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './views/Login';
import ForgotPassword from './views/ForgotPassword';
import ResetPassword from './views/ResetPassword';
import Page404 from './views/Page404';
import Page500 from './views/Page500';
import Main from './views/Main';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;


function App(props: any) {
  const { t } = props;
  return (
    <HashRouter>
      <Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/login" render={props => <Login {...props}/>} />
          <Route exact path="/forgot-password" render={props => <ForgotPassword {...props}/>} />
          <Route exact path="/reset-password" render={props => <ResetPassword {...props}/>} />

          <Route exact path="/404" render={props => <Page404 {...props}/>} />
          <Route exact path="/500" render={props => <Page500 {...props}/>} />

          <Route exact path="/" render={props => <Main {...props}/>} />
        
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

export default withTranslation('common')(App);