import React from 'react';
import { withTranslation } from 'react-i18next';
import './index.css';

function Page404(props: any) {
  const { t } = props;
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h3>{t('page404.title')}</h3>
          <h1><span>4</span><span>0</span><span>4</span></h1>
        </div>
        <h2>{t('page404.message')}</h2>
      </div>
    </div>
  );
}

export default withTranslation('common')(Page404);
