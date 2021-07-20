import React, {Suspense} from 'react';
import { withTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import { HashRouter, Route, Switch } from 'react-router-dom';

function Login(props: any) {
  const { t } = props;
  return (
    <div>
      <Button>{t('query')}</Button>
    </div>
  );
}

export default withTranslation('common')(Login);
