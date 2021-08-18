import React, {Fragment, useState, Suspense, useEffect, useReducer } from 'react';
import { withTranslation } from 'react-i18next';

import { updateUserManageAuthority } from '../../tools/redux/actionTypes/authority/updateUserManageAuthority'; 
import updateUserManageAuthorityReducer from '../../tools/redux/reducers/authority/updateUserManageAuthorityReducer';
import authorityState from '../../tools/redux/states/authority';

import Header from '../Header';
import Footer from '../Footer';

import LeftSidebar from '../LeftSidebar';
import { Button } from 'react-bootstrap';

import openLeftMenuReducer from '../../tools/redux/reducers/operation/openLeftMenuReducer'; 
import operationState from '../../tools/redux/states/operation';

import MenuIconButton from '../../components/MenuIconButton';

import { useSelector } from 'react-redux';
import { useStore } from "react-redux";

function Main(props: any) {
  const { t } = props;

  const [updateUserManageAuthorityState, dispatchUpdateUserManageAuthority] = useReducer(openLeftMenuReducer, operationState);
  const isOpenLeftMenu = useSelector((state: any) => state.operation.openLeftMenu);



  
console.log(`openLeftMenu:${updateUserManageAuthorityState.openLeftMenu}`);
console.log(`isOpenLeftMenu:${isOpenLeftMenu}`);

  return (
    <main className="flex flex-col h-screen justify-between">
      <Header />
      <div>
        <LeftSidebar />

        <div id="main" className={`${updateUserManageAuthorityState.openLeftMenu? 'openLeftSidebar': 'closeLeftSidebar'}`}>
          這是測試{updateUserManageAuthorityState.openLeftMenu}
          <h2>Collapsed Sidebar</h2>aa
          <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
          <button onClick={()=>{
            
          }}>測試</button>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default withTranslation('common')(Main);
