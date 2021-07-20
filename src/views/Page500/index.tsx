import React, {Suspense} from 'react';
import { withTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import { HashRouter, Route, Switch } from 'react-router-dom';

function Page500(props: any) {
  const { t } = props;
  return (
    <div>
      <Button>500</Button>
    </div>
  );
}

export default withTranslation('common')(Page500);
