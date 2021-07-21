import React, {Suspense} from 'react';
import { withTranslation } from 'react-i18next';

import { HashRouter, Route, Switch } from 'react-router-dom';

function Login(props: any) {
  const { t } = props;
  return (
    <div>
      {t('query')}
    </div>
  );
}

export default withTranslation('common')(Login);
