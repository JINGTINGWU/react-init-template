import React, {Suspense} from 'react';
import { withTranslation } from 'react-i18next';
import { HashRouter, Route, Switch } from 'react-router-dom';

function ForgotPassword(props: any) {
  const { t } = props;
  return (
    <div>
      忘記密碼
    </div>
  );
}

export default withTranslation('common')(ForgotPassword);
