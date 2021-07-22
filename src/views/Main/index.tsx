import React, {Fragment, useState, Suspense, useEffect, useReducer } from 'react';
import { withTranslation } from 'react-i18next';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { storeTypes } from '../../tools/redux/store'; 
import { updateUserManageAuthority } from '../../tools/redux/actionTypes/authority/updateUserManageAuthority'; 
import reducer from '../../tools/redux/reducers/authority/updateUserManageAuthorityReducer';
import authorityState from '../../tools/redux/states/authority';

import Header from '../../containers/Header';
import Footer from '../../containers/Footer';

import { Dialog, Transition } from '@headlessui/react';
import Sidebar from '../../containers/Sidebar';

function Main(props: any) {
  const { t } = props;
  const [updateUserManageAuthorityState, dispatchUpdateUserManageAuthority] = useReducer(reducer, authorityState);

  const [open, setOpen] = useState(true)

  return (
    <>
      {/* <Header />
      <h4>主要畫面</h4>
      <br/>
      <br/>
      {t('language')}
      <br/>
      <button  color="primary" onClick={()=>props.i18n.changeLanguage('en-US')}>{t('en-US')}</button>
      <button type="button" className="btn btn-success" onClick={()=>props.i18n.changeLanguage('zh-TW')}>{t('zh-TW')}</button>
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
      ))}>remove</button> */}



<button  color="primary" onClick={()=>setOpen(!open)}>open:{new Boolean(open).toString()}</button>


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

        <Sidebar show={open}>
          
            I will fade in and out
    
         



        </Sidebar>

      <Footer />
    </>
  );
}

export default withTranslation('common')(Main);
