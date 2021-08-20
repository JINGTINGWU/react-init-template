import React from 'react';
import { withTranslation } from 'react-i18next';

function MyInfo(props: any) {
  return (
    <div>
      這是我的資訊
    </div>
  );
}

export default withTranslation('common')(MyInfo);
