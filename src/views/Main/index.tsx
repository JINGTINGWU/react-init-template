import React, {Suspense} from 'react';
import { withTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { storeTypes } from '../../tools/redux/store'; 

function Main(props: any) {
  const { t } = props;

  const dispatch = useDispatch();

  const userManage = useSelector((state: storeTypes) => state.showAllAuthority.userManage);

  return (
    <div>
      <Button variant="outlined" color="secondary">主要畫面</Button>
      <br/>
      <br/>
      <Button>{t('language')}</Button>
      <br/>
      <Button variant="outlined" color="primary" onClick={()=>props.i18n.changeLanguage('en-US')}>{t('en-US')}</Button>
      <Button variant="contained" color="secondary" onClick={()=>props.i18n.changeLanguage('zh-TW')}>{t('zh-TW')}</Button>
      <br/>
      <br/>
      <br/>
      {userManage}
      <br/>
      <Button variant="outlined" color="primary" onClick={()=>props.i18n.changeLanguage('en-US')}>{t('submit')}</Button>
    </div>
  );
}

export default withTranslation('common')(Main);
