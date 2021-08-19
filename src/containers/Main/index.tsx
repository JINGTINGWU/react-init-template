import React, {Fragment, useState, Suspense, useEffect, useReducer } from 'react';
import { withTranslation } from 'react-i18next';

import Header from '../Header';
import Footer from '../Footer';

import LeftSidebar from '../LeftSidebar';

import { useRecoilState } from 'recoil';
import { sidebarStatus } from '../../tools/recoil/sidebarStatus';

import './index.css';

function Main(props: any) {
  const { t } = props;
  const [isOpenSidebar, setOpenSidebar] = useRecoilState(sidebarStatus);

  return (
    <div id="main">
      <Header />
      <div id="sidebar-with-content">
        <LeftSidebar />

        <div id="main-content" >
          這是測試{`...${isOpenSidebar}...`}
          <h2>Collapsed Sidebar{isOpenSidebar}</h2>aa
          <p>1.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
          <p>2.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
          <p>3.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
          <p>4.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
          <p>5.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
          <p>6.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
          <p>7.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
          <p>8.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
          <p>9.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withTranslation('common')(Main);
