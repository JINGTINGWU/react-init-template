import React from 'react';
import { withTranslation } from 'react-i18next';

function Login(props: any) {
  const { t } = props;
  return (
    <div>
      {t('query')}
    </div>
  );
}

export default withTranslation('common')(Login);
