import React, {Fragment, useState, Suspense, useEffect, useReducer } from 'react';
import { withTranslation } from 'react-i18next';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

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
      <button className="bg-blue-500 text-white hover:bg-blue-700 rounded py-2 px-4 shadow " onClick={()=>props.i18n.changeLanguage('en-US')}>{t('en-US')}</button>
      <button className="bg-red-500 text-white hover:bg-red-700 rounded py-2 px-4 shadow " onClick={()=>props.i18n.changeLanguage('zh-TW')}>{t('zh-TW')}</button>
      <br />
      {/* {updateUserManageAuthorityState.userManage.add ? "T" : "F"}
      <br/>
      {updateUserManageAuthorityState.userManage.modify ? "T" : "F"} 
      <br/>
      {updateUserManageAuthorityState.userManage.remove ? "T" : "F"} 
      <br/>
      <button 
        className="btn btn-primary bg-pink"
        onClick={()=>dispatchUpdateUserManageAuthority(updateUserManageAuthority(
          !updateUserManageAuthorityState.userManage.add,
          updateUserManageAuthorityState.userManage.modify,
          updateUserManageAuthorityState.userManage.remove
        ))}>
          add
      </button> 

      <button 
        className="btn btn-secondary" 
        onClick={()=>dispatchUpdateUserManageAuthority(updateUserManageAuthority(
        updateUserManageAuthorityState.userManage.add,
        !updateUserManageAuthorityState.userManage.modify,
        updateUserManageAuthorityState.userManage.remove
      ))}>modify</button>
      <button
        className="btn btn-accent"
        onClick={()=>dispatchUpdateUserManageAuthority(updateUserManageAuthority(
        updateUserManageAuthorityState.userManage.add,
        updateUserManageAuthorityState.userManage.modify,
        !updateUserManageAuthorityState.userManage.remove
      ))}>remove</button> */}




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


      </main>
      <Footer />
    </div>
  );
}

export default withTranslation('common')(Main);
