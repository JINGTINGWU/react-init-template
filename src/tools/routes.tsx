import React from 'react';

const MyInfo = React.lazy(() => import('../pages/MyInfo'));
const SetBct1Parameter = React.lazy(() => import('../pages/SetBct1Parameter'));
const SetBct2Parameter = React.lazy(() => import('../pages/SetBct2Parameter'));

const routes = [
  {
    path: "/my-info",
    name: 'my-info',
    main: () => <MyInfo />
  },
  {
    path: "/set-bct1-parameter",
    name: 'set-bct1-parameter',
    main: () => <SetBct1Parameter />
  },
  {
    path: "/set-bct2-parameter",
    name: 'set-bct2-parameter',
    main: () => <SetBct2Parameter />
  }
];

export default routes;
