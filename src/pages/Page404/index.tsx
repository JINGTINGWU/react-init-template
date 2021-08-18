import React, {Suspense} from 'react';
import { withTranslation } from 'react-i18next';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

function Page404(props: any) {
  const { t } = props;
  return (
    <div>
      Page404
    </div>
  );
}

export default withTranslation('common')(Page404);
