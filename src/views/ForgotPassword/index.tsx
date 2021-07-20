import React, {Suspense} from 'react';
import { withTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import { HashRouter, Route, Switch } from 'react-router-dom';

function ForgotPassword(props: any) {
  const { t } = props;
  return (
    <div>
      <Button>忘記密碼</Button>
    </div>
  );
}

export default withTranslation('common')(ForgotPassword);
