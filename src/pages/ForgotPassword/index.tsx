import React from 'react';
import { withTranslation } from 'react-i18next';

function ForgotPassword(props: any) {
  return (
    <div>
      忘記密碼
    </div>
  );
}

export default withTranslation('common')(ForgotPassword);
