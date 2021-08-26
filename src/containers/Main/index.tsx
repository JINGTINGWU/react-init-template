import React, { Suspense } from 'react';
import { withTranslation } from 'react-i18next';
import { Redirect, Route, Switch, useRouteMatch, HashRouter } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import LeftSidebar from '../LeftSidebar';
import { useRecoilState } from 'recoil';
import { sidebarStatus } from '../../tools/recoil/sidebarStatus';

import './index.css';
const MyInfo = React.lazy(() => import('../../pages/MyInfo'));
const ResetPassword = React.lazy(() => import('../../pages/ResetPassword'));
const SetBct1Parameter = React.lazy(() => import('../../pages/SetBct1Parameter'));
const SetBct2Parameter = React.lazy(() => import('../../pages/SetBct2Parameter'));
const GtiMiniParametersSetting = React.lazy(() => import('../../pages/GtiMiniParametersSetting'));
const GtiMiniParametersSettingBatch = React.lazy(() => import('../../pages/GtiMiniParametersSettingBatch'));
const Gti5Spectrum = React.lazy(() => import('../../pages/Gti5Spectrum'));
const Gti6SpectrumValve = React.lazy(() => import('../../pages/Gti6SpectrumValve'));
const UpgradeFirmware = React.lazy(() => import('../../pages/UpgradeFirmware'));
const UploadFirmwareFile = React.lazy(() => import('../../pages/UploadFirmwareFile'));

function Main(props: any) {
  const { t } = props;
  let { path, url } = useRouteMatch();
  const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  console.log(path);

  let token = localStorage.getItem('my-token');
  console.log(token);

  if(!token){
    return <Redirect to="/login" />;
  }

  return (
    <div id="main">
      <Header />
      <div id="sidebar-with-content">
        <div>
          <LeftSidebar/>
        </div>
        <div id="main-content">
          <Suspense fallback={loading()}>
            <Switch>
              <Route exact path={`${path}/my-info`} render={props => <MyInfo {...props}/>} />
              <Route exact path={`${path}/reset-password`} render={props => <ResetPassword {...props}/>} />
              <Route exact path={`${path}/set-bct1-parameter`} render={props => <SetBct1Parameter {...props}/>} />
              <Route exact path={`${path}/set-bct2-parameter`} render={props => <SetBct2Parameter {...props}/>} />
              <Route exact path={`${path}/gti-mini-parameters-setting`} render={props => <GtiMiniParametersSetting {...props}/>} />
              <Route exact path={`${path}/gti-mini-parameters-setting-batch`} render={props => <GtiMiniParametersSettingBatch {...props}/>} />
              <Route exact path={`${path}/gti5-spectrum`} render={props => <Gti5Spectrum {...props}/>} />
              <Route exact path={`${path}/gti6-spectrum-valve`} render={props => <Gti6SpectrumValve {...props}/>} />
              <Route exact path={`${path}/upgrade-firmware`} render={props => <UpgradeFirmware {...props}/>} />
              <Route exact path={`${path}/upload-firmware-file`} render={props => <UploadFirmwareFile {...props}/>} />
              <Route path={`${path}/*`}>
                <Redirect to="/404" />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withTranslation('common')(Main);
