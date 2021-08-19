import React, {Suspense} from 'react';
import { withTranslation } from 'react-i18next';
import { HashRouter, Route, Switch } from 'react-router-dom';


import { useRecoilState } from 'recoil';
import { sidebarStatus } from '../../tools/recoil/sidebarStatus';

function Page404(props: any) {
  const { t } = props;

  const [isOpenSidebar, setOpenSidebar] = useRecoilState(sidebarStatus);

  return (
    <div>
      Page404{`...${isOpenSidebar}...`}
    </div>
  );
}

export default withTranslation('common')(Page404);
