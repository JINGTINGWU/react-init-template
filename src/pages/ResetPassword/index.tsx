import React from 'react';
import { withTranslation } from 'react-i18next';

function ResetPassword(props: any) {
  return (
    <div>
      重設密碼
    </div>
  );
}

export default withTranslation('common')(ResetPassword);
