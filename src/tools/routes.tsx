import React from 'react';

const MyInfo = React.lazy(() => import('../pages/MyInfo'));
const SetBct1Parameter = React.lazy(() => import('../pages/SetBct1Parameter'));
const SetBct2Parameter = React.lazy(() => import('../pages/SetBct2Parameter'));
const Page404 = React.lazy(() => import('../pages/Page404'));

const routes = [
  {
    path: "/my-info",
    name: 'my-info',
    isLeftMenu: false,
    main: () => <MyInfo />
  },
  {
    name: 'set-parameter',
    isLeftMenu: true,
    icon: () => <i className="bi bi-card-list text-2xl"></i>,
    children: [
      {
        path: "/set-bct1-parameter",
        name: 'set-bct1-parameter',
        isLeftMenu: true,
        icon: () => <i className="bi bi-dice-1 text-2xl"></i>,
        main: () => <SetBct1Parameter />
      },
      {
        path: "/set-bct2-parameter",
        name: 'set-bct2-parameter',
        isLeftMenu: true,
        icon: () => <i className="bi bi-dice-2 text-2xl"></i>,
        main: () => <SetBct2Parameter />
      }
    ]
  },
  {
    name: 'set-parameter',
    isLeftMenu: true,
    icon: () => <i className="bi bi-cloud-arrow-up text-2xl"></i>,
    children: [
      {
        path: "/set-bct1-parameter",
        name: 'set-bct1-parameter',
        isLeftMenu: true,
        icon: () => <i className="bi bi-dice-1 text-2xl"></i>,
        main: () => <SetBct1Parameter />
      },
      {
        path: "/set-bct2-parameter",
        name: 'set-bct2-parameter',
        isLeftMenu: true,
        icon: () => <i className="bi bi-dice-2 text-2xl"></i>,
        main: () => <SetBct2Parameter />
      }
    ]
  },
  {
    path: "/set-bct1-parameter",
    name: 'set-bct1-parameter',
    isLeftMenu: true,
    icon: () => <i className="bi bi-dice-1 text-2xl"></i>,
    main: () => <SetBct1Parameter />
  },
  {
    path: "/set-bct2-parameter",
    name: 'set-bct2-parameter',
    isLeftMenu: true,
    icon: () => <i className="bi bi-dice-2 text-2xl"></i>,
    main: () => <SetBct2Parameter />
  }
];

export default routes;
