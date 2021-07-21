import React, {Suspense} from 'react';
import { withTranslation } from 'react-i18next';
import { HashRouter, Route, Switch } from 'react-router-dom';

function Page500(props: any) {
  const { t } = props;
  return (
    <div>
      500
    </div>
  );
}

export default withTranslation('common')(Page500);
