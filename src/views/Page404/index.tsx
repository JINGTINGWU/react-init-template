import React, {Suspense} from 'react';
import { withTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

function Page404(props: any) {
  const { t } = props;
  return (
    <div>
      <Button>Page404</Button>
    </div>
  );
}

export default withTranslation('common')(Page404);
