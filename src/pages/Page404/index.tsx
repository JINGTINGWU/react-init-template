import React from 'react';
import { withTranslation } from 'react-i18next';


import { useRecoilState } from 'recoil';
import { sidebarStatus } from '../../tools/recoil/sidebarStatus';

function Page404(props: any) {

  const [isOpenSidebar, ] = useRecoilState(sidebarStatus);

  return (
    <div>
      Page404{`...${isOpenSidebar}...`}
    </div>
  );
}

export default withTranslation('common')(Page404);
