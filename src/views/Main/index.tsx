import React, {Suspense, useEffect, useReducer } from 'react';
import { withTranslation } from 'react-i18next';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { storeTypes } from '../../tools/redux/store'; 
import { updateUserManageAuthority } from '../../tools/redux/actionTypes/authority/updateUserManageAuthority'; 
import reducer from '../../tools/redux/reducers/authority/updateUserManageAuthorityReducer';
import authorityState from '../../tools/redux/states/authority';

function Main(props: any) {
  const { t } = props;
  const [updateUserManageAuthorityState, dispatchUpdateUserManageAuthority] = useReducer(reducer, authorityState);

  return (
    <div>
      <h4>主要畫面</h4>
      <br/>
      <br/>
      {t('language')}
      <br/>
      <button color="primary" onClick={()=>props.i18n.changeLanguage('en-US')}>{t('en-US')}</button>
      <button color="secondary" onClick={()=>props.i18n.changeLanguage('zh-TW')}>{t('zh-TW')}</button>
      <br/>
      <br/>
      <br />
      <br />
      {updateUserManageAuthorityState.userManage.add ? "T" : "F"}
      <br/>
      {updateUserManageAuthorityState.userManage.modify ? "T" : "F"} 
      <br/>
      {updateUserManageAuthorityState.userManage.remove ? "T" : "F"} 
      <br/>
      <button color="primary" onClick={()=>dispatchUpdateUserManageAuthority(updateUserManageAuthority(
        !updateUserManageAuthorityState.userManage.add,
        updateUserManageAuthorityState.userManage.modify,
        updateUserManageAuthorityState.userManage.remove
      ))}>add</button>
      <button color="primary" onClick={()=>dispatchUpdateUserManageAuthority(updateUserManageAuthority(
        updateUserManageAuthorityState.userManage.add,
        !updateUserManageAuthorityState.userManage.modify,
        updateUserManageAuthorityState.userManage.remove
      ))}>modify</button>
      <button color="primary" onClick={()=>dispatchUpdateUserManageAuthority(updateUserManageAuthority(
        updateUserManageAuthorityState.userManage.add,
        updateUserManageAuthorityState.userManage.modify,
        !updateUserManageAuthorityState.userManage.remove
      ))}>remove</button>
    </div>
  );
}

export default withTranslation('common')(Main);
