import React, {Fragment, useState, Suspense, useEffect, useReducer } from 'react';
import { withTranslation } from 'react-i18next';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { storeTypes } from '../../tools/redux/store'; 
import { updateUserManageAuthority } from '../../tools/redux/actionTypes/authority/updateUserManageAuthority'; 
import updateUserManageAuthorityReducer from '../../tools/redux/reducers/authority/updateUserManageAuthorityReducer';
import authorityState from '../../tools/redux/states/authority';

import Header from '../../containers/Header';
import Footer from '../../containers/Footer';

import { Dialog, Transition } from '@headlessui/react';
import LeftSidebar from '../../containers/LeftSidebar';


import { openLeftMenu } from '../../tools/redux/actionTypes/operation/openLeftMenu';
import openLeftMenuReducer from '../../tools/redux/reducers/operation/openLeftMenuReducer';
import operationState from '../../tools/redux/states/operation';

import { useSelector } from 'react-redux'

function Main(props: any) {
  const { t } = props;
  const [updateUserManageAuthorityState, dispatchUpdateUserManageAuthority] = useReducer(updateUserManageAuthorityReducer, authorityState);
  const isOpenLeftMenu = useSelector((state: any) => state.operation.openLeftMenu);

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main className="bg-scroll">

      <h4>isOpenLeftMenu: {new Boolean(isOpenLeftMenu).toString()}</h4>
      <br/>
      {t('language')}
      <br/>
      <button  color="primary" onClick={()=>props.i18n.changeLanguage('en-US')}>{t('en-US')}</button>
      <button type="button" className="btn btn-success" onClick={()=>props.i18n.changeLanguage('zh-TW')}>{t('zh-TW')}</button>
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




        {/* <Transition
          show={open}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          
        >
          <div style={{backgroundColor: 'pink', width: '33%'}}>
          I will fade in and out
          </div>
         
        </Transition> */}

        <LeftSidebar show={isOpenLeftMenu}>
          
            I will fade in and out
    
         



        </LeftSidebar>
      </main>
      <Footer />
    </div>
  );
}

export default withTranslation('common')(Main);
